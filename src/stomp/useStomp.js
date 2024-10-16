import React from 'react'
import {StompContext} from './StompProvider'

export const useStomp = () => {
  const value = React.useContext(StompContext)
  const {stompConnect, stompDisconnect, isConnected, stompClient, setSubscriptions} = value

  const send = (path, body, headers = null) => {
    stompClient?.publish({
      destination: path,
      headers,
      body: typeof body === 'object' ? JSON.stringify(body) : body,
    })
  }

  const subscribe = (path, callback, _stompClient = stompClient) => {
    if (!isConnected || !(_stompClient && _stompClient.connected)) return
    setSubscriptions((prev) => {
      if (prev[path]) {
        return prev
      } else {
        const stompSubscription = _stompClient.subscribe(path, (message) => {
          // console.log('message.body ::::::: ', message.body)
          const body = JSON.parse(message.body)
          callback(body)
        })
        return {...prev, [path]: stompSubscription}
      }
    })
  }

  const unsubscribe = (path) => {
    setSubscriptions((prev) => {
      prev[path]?.unsubscribe()
      delete prev[path]
      return prev
    })
  }

  return {
    isConnected,
    stompConnect,
    stompDisconnect,
    stompClient,
    subscribe,
    unsubscribe,
    send,
  }
}
