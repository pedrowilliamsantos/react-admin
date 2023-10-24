import React from 'react'
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>React Admin</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" />
                <img src="/app.svg" alt="" />
                <img src="/expand.svg" alt="" />
                <div className="notification"> 
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://images.pexels.com/photos/3747147/pexels-photo-3747147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <span>Pedro</span>
                </div>
                <img className='icon' src="/settings.svg" alt="" />
            </div>
        </div>
    )
}

export default Navbar