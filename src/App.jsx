import React from 'react'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Users from './pages/users/Users'
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import "./styles/global.scss"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import User from './pages/user/User'
import Product from "./pages/product/Product"

const App = () => {

    const Layout = () => {
        return (
            <div className="main">
                <Navbar />
                <div className="container">
                    <div className="menuContainer">
                        <Menu />
                    </div>
                    <div className="contentContainer">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/home",
            element: <Layout />,
            children: [
                {
                    path: "/home",
                    element: <Home />
                },
                {
                    path: "/users",
                    element: <Users/>
                },
                {
                    path: "/products",
                    element: <Products />
                },
                {
                    path: "/users/:id",
                    element: <User />
                },
                {
                    path: "/products/:id",
                    element: <Product />
                },
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default App
