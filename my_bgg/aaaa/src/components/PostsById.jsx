import {useData} from "../hooks/useData";
import style from "./PostsById.module.css";
import { Post } from "./Post";


export const PostsById = (props) => {
    const posts = useData('https://jsonplaceholder.typicode.com/posts?userId='+ props.id)
    return (
    <div className={style.postsContainer}>
        <ul>
            {!!posts?.length && posts.map((post) => 
                <Post key={post.id} userId={props.id} postId={post.id}/>
            )}
        </ul>
    </div>
    );
 }