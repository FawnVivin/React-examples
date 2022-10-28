import {useData} from "../hooks/useData";
import { Link } from "react-router-dom";
import style from "./Post.module.css";
import { useAvatar } from "../hooks/useAvatar";
import{Comments} from "../components/Comments"
import { useState } from "react";

export const Post = (props) => {
    const post = useData('https://jsonplaceholder.typicode.com/posts/'+props.postId+'?userId='+ props.userId)
    const user = useData('https://jsonplaceholder.typicode.com/users/'+ props.userId)
    const avatar = useAvatar(props.userId);
    const[comment,setComment] = useState(false);
    let commentBlock;

    if (comment){
        commentBlock = <div className={style.postComments}><Comments postid={props.postId} /></div>;
    }
    else commentBlock = null;

    const commentHandler=()=>{
        setComment(!comment)
        console.log(comment);
    }
    return (
    <div className={style.postContainer}>
            { <div className={style.postItem}>
                <div className={style.postContent}>
                    <div className={style.postAuthorContainer}>
                        <img src = {avatar} className={style.avatar}/>
                        <p className={style.postAuthor}><Link to={`/user/${props.userId}`}>@{user?.username}</Link></p>
                    </div>
                    <div className={style.postLine}></div>
                    <Link to = {`/post/${props.postId}/${props.userId}`} className={style.postTitle}>
                         {post?.title} 
                    </Link>
                    <div className={style.postLine}></div> 
                    <div className={style.postCommentButton}><button onClick={()=>commentHandler(post.id)} className={style.commentButton}>Comments</button></div>
                </div>
                {commentBlock}
            </div>  
            }
    </div>
    );
 }