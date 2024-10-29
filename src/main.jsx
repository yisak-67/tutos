import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './ui/Layout.jsx'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'

const RouterLayout = () => {

  return (
    <Layout>
       <ScrollRestoration />
       <Outlet />

    </Layout>

  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
    
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
