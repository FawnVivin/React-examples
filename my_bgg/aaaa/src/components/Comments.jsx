import { useData } from "../hooks/useData"
import style from "./Comments.module.css"

export const Comments = (props) =>{
    const comments = useData("https://jsonplaceholder.typicode.com/comments/?postId="+props.postid);
    return(
        <ul>
            {!!comments?.length && comments.map((comment) => 
                <li key = {comment.id} className={style.commentsItem}>
                    <p className={style.commentsTitle}>{comment?.name}</p>
                    <p className={style.commentsBody}>{comment?.body}</p>
                    <p className={style.commentsAuthor}>{comment?.email}</p>
                </li>
                )}
        </ul>
    )
}