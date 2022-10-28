import {useData} from "../hooks/useData"
import { useParams } from "react-router-dom"
import React, { Component }  from 'react';
import style from "./Post.module.css";
import { Comments } from "../components/Comments";
import {Title} from "../components/Title"
import { Link } from "react-router-dom";

export const Post = () => {
    let params = useParams();
    const post = useData('https://jsonplaceholder.typicode.com/posts/'+ params.id)
    const user = useData('https://jsonplaceholder.typicode.com/users/'+ params.userId)
    return (
        <div className={style.postContainer}>
            <div className={style.postContent}>
                <h1 className={style.postTitle}>{post?.title}</h1>
                <p className={style.postText}>{post?.body}</p>
                <p className={style.postAuthor}><Link to={`/user/${user?.id}`}>@{user?.username}</Link></p> 
            </div>
            <Title title="Comments"/>
            <Comments postid={params.id}/>
        </div>

    );
 }