import { useParams } from "react-router-dom";
import { useData } from "../hooks/useData";
import {useAvatar} from "../hooks/useAvatar";
import style from "./User.module.css";
import { Title } from "../components/Title";
import { PostsById } from "../components/PostsById";

export const User = () => {
    let {id} = useParams();
    const user = useData("https://jsonplaceholder.typicode.com/users/"+id);
    let pic = useAvatar(id);
    return(
         <div className={style.container}>
            <div className={style.userContainer}>
                <img src={pic} className={style.avatar}></img>
                <ul  className={style.userList}>
                    <li className={style.userItem}>
                        <h1 className={style.userName}> {user?.username}</h1>
                    </li>
                    <li className={style.userItem}>
                        <p className={style.infoItem}>name: </p>
                        <p>{user?.name}</p>
                    </li>
                    <li className={style.userItem}>
                        <p className={style.infoItem}>city: </p>
                        <p>{user?.address.city}</p>
                    </li>
                    <li className={style.userItem}>
                        <p className={style.infoItem}>website: </p>
                        <p>{user?.website}</p>
                    </li>
                    <li className={style.userItem}>
                        <p className={style.infoItem}>email: </p>
                        <p>{user?.email}</p>
                    </li>
                </ul>
            </div>
            <div className={style.postsTitle}><Title title="Posts"/></div>
            <PostsById id={id}/>
         </div>   
    )
}