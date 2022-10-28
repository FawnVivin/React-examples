import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Posts } from "./pages/Posts"
import { Post } from "./pages/Post"
import { Layout } from "./components/Layout"
import { Albums } from "./pages/Albums"
import React, { Component }  from 'react';
import { Album } from "./pages/Album"
import { User } from "./pages/User"

export const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Layout/>}>
                <Route path = "/" element = {<Posts/>}/>
                <Route index path = "/post/:id/:userId" element = {<Post/>}/>
                <Route path = "/user/:id" element = {<User/>}></Route>
                <Route path = "/albums" element = {<Albums/>}/>
                <Route path = "/album/:id" element ={<Album/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    )
 }