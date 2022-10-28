import { useEffect, useState } from "react"


export const useData = (url) => {
    
    const [data,setData] = useState(null);

    useEffect( () => {
        if(url){
            fetch(url)
                .then((response) => response.json())
                .then((json) => setData(json))    
            }
    },[url])
    
    return data 
};

