import React from 'react'
import { Link } from "react-router-dom"
import "./menu.scss"
import { menu } from "../../data"

const Menu = () => {

    return (
        <div className='menu'>
            {menu.map((item) => (
                <div className="item" key={item.id}>
                    <span className='title'>{item.title}</span>
                    {item.listItems.map((listItem) => (
                        <Link to={listItem.url} className='listItem' key={listItem.id} style={{ cursor: listItem.url === '/' ? 'not-allowed' : 'white' }}>
                            <img src={listItem.icon} alt="" />
                            <span className="listItemTitle" style={{ color: listItem.url === '/' ? '#CCCCCC' : 'white' }}>{listItem.title}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Menu