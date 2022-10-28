import { Outlet } from "react-router-dom";
import { Menu} from "./Menu";
import React, { Component }  from 'react';
import style from "./../Main.module.css";
import {Header} from "./Header";
import { Posts } from "../pages/Posts";

export const Layout = () => {
    return(
        <div>
            <Header/>
            <div className={style.mainContainer}>
                <Menu/>
                
                <Outlet/>
            </div>
        </div>
    )



}