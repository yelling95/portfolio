import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {StompProvider} from './stomp'
import {HomeView} from './pages'

import './App.scss'

export default function App(props) {
  const routerData = [
    {
      path: '/',
      element: <HomeView />,
      childrent: [],
    },
  ]
  const router = createBrowserRouter(routerData)

  return (
    <div className="app_container">
      <StompProvider>
        <RouterProvider router={router} />
      </StompProvider>
    </div>
  )
}
