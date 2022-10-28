import {useData} from "../hooks/useData";
import { Link } from "react-router-dom";
import React, { Component }  from 'react';
import style from "./Posts.module.css";
import { PostsById } from "../components/PostsById";

export const Posts = () => {
    const posts = useData('https://jsonplaceholder.typicode.com/posts')
    const users = useData('https://jsonplaceholder.typicode.com/users')
    const masUsers=new Object();
    !!users?.length && users.map((user) => {masUsers[user.id]=user.username})
    return (
    <div className={style.postsContainer}>
        <ul>
            {!!posts?.length && posts.map((post) => 
                <PostsById id={post.id}/>
            )}
        </ul>
    </div>
    );
 }