import{useState} from "react";
export const useAvatar = (id) =>{
    const [pic,setPic] = useState(null);
    const getFirstPic = async (id) => {
        
        const respAlbums = await fetch("https://jsonplaceholder.typicode.com/users/"+id+"/albums");
        const albums = await respAlbums.json();  
        const respAlbum= await fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + albums[0].id);
        const album = await respAlbum.json();
        setPic(album[0].url);
    };
    getFirstPic(id);
    return pic;
}