import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {StompProvider} from './stomp'
import {HomeView} from './pages'

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
    <StompProvider>
      <RouterProvider router={router} />
    </StompProvider>
  )
}
