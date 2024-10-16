import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import dayjs from 'dayjs'
import {Provider} from 'react-redux'
import {store} from './helpers'

import 'dayjs/locale/ko'
import '../src/locale/i18n'

import './assets/color.scss'
import './assets/base.scss'
import './assets/anim.scss'

dayjs.locale('ko')

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
