import { Link } from "react-router-dom"
import React, { Component }  from 'react';
import style from "./Menu.module.css"

export const Menu = () => {
    return(
        <div className={style.menuContainer}>
            <ul className={style.menuList}>
                <li className={style.menuItem}><Link to = "/">Posts</Link></li>
                <li className={style.menuItem}><Link to = "/albums">Albums</Link></li>
            </ul>
        </div>
    )
}