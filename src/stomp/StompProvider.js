import React from 'react'
import SockJS from 'sockjs-client'
import API from '../services/api.config'
import {Client} from '@stomp/stompjs'
import {storage} from '../helpers'

const defaultValue = {
  stompClient: null,
  subscriptions: {},
  setSubscriptions: () => {},
}

const StompContext = React.createContext(defaultValue)

export const StompProvider = ({children, config}) => {
  const [stompClient, setStompClient] = React.useState(null)
  const [subscriptions, setSubscriptions] = React.useState({})
  const [isConnected, setIsConnected] = React.useState(false)

  const stompConnect = (accessToken = null) => {
    const isReloadRef = React.useRef(false)
    const newStompClient = new Client({
      webSocketFactory: () => new SockJS(API.url + '/ws'),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      debug: (frame) => {
        log(`[STOMP DEBUG] :: ${frame}`)
        if (isReloadRef.current) {
          isReloadRef.current = false
        }
      },
      onConnect: () => {
        setIsConnected(true)
      },
      onDisconnect: () => {
        setIsConnected(false)
      },
      onUnhandledMessage: (frame) => {
        log(`[STOMP UNHANDLE MESSAGE] :: ${frame}`)
      },
      onWebSocketError: (frame) => {
        log('[WEB SOCKET ERROR] :: ' + JSON.stringify(frame))
      },
      onWebSocketClose: (frame) => {
        log('[WEB SOCKET CLOSE] :: ' + JSON.stringify(frame))
      },
      ...config,
    })

    newStompClient.beforeConnect = () => {
      newStompClient.connectHeaders = {
        Authorization: '',
      }
    }

    newStompClient.onStompError = (frame) => {
      log('[STOMP ERROR] :: ' + JSON.stringify(frame))
      if (frame.body === 'Invalid Credential') {
        log('[STOMP CONNECT ERROR] :: 토큰 인증 실패')
        stompDisconnect(newStompClient)
        setTimeout(() => {
          isReloadRef.current = true
          stompConnect()
        })
      }
    }

    setStompClient(newStompClient)
  }

  const stompDisconnect = (_stompClient = stompClient, isReset = true) => {
    _stompClient?.deactivate()
    setIsConnected(false)
    if (isReset) {
      setStompClient(null)
      setSubscriptions({})
    }
  }

  const log = (message) => {
    console.log(message)
  }

  React.useEffect(() => {
    stompClient?.activate()
    return () => {
      stompClient?.deactivate()
      setSubscriptions({})
      setIsConnected(false)
    }
  }, [stompClient])

  const value = React.useMemo(
    () => ({
      stompConnect,
      stompDisconnect,
      isConnected: !!stompClient?.connected,
      stompClient,
      subscriptions,
      setSubscriptions,
    }),
    [isConnected, stompClient, subscriptions],
  )

  return <StompContext.Provider value={value}>{children}</StompContext.Provider>
}
export {StompContext}
