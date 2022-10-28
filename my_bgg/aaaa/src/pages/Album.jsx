import { useParams } from "react-router-dom"
import { useData } from "../hooks/useData";

export const Album = () => {
    let {id} = useParams();
    const alb = useData("https://jsonplaceholder.typicode.com/photos?albumId="+id);
    return(
        <ul> 
            {!!alb?.length && alb.map((alb) => 
            <li key = {alb.id}>
                {alb.title}
                <img src = {alb.url} alt="pic" />
            </li>
            )}
        </ul>
    )
}