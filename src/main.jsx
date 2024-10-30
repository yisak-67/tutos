import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './ui/Layout.jsx'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
import Categories from './ui/Categories.jsx'
import Product from './pages/Product.jsx'

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
      {
        path: "/category",
        element: <Categories />,
      },
      {
        path: "/category/:id",
        element: <Categories />,
      },
      {
      path: "/product",
      element: <Product />,
      },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
      // {
      //   path: "/favorite",
      //   element: <Favorite />,
      // },
      // {
      //   path: "/orders",
      //   element: <Orders />,
      // },
      // {
      //   path: "/success",
      //   element: <Success />,
      // },
      // {
      //   path: "/cancel",
      //   element: <Cancel />,
      // },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
