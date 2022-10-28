import {useData} from "../hooks/useData"
import { Link } from "react-router-dom"
import React, { Component }  from 'react';

export const Albums = () => {
    const albs = useData('https://jsonplaceholder.typicode.com/albums')
    return (
    <div>
        <ul> 
            {!!albs?.length && albs.map((alb) => 
            <li key = {alb.id}>
                <Link to = {`/album/${alb.id}`}>
                    {alb.title}
                </Link>

            </li>)}
        </ul> 
    </div>
    );
 }