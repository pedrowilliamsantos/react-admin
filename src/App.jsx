import React from 'react'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Users from './pages/users/Users'
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import "./styles/global.scss"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const App = () => {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="menuContainer">
            <Outlet />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/users",
          element: <Users/>
        },
        {
          path:"/products",
          element: <Products/>
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App