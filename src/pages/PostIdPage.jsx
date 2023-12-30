import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetchingHook} from "../hooks/useFetchingHook";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {

    const params = useParams(); // вивід динамічної складової URL
    const[post, setPost] = useState([]);
    const[fetchPostById, isLoading, error] = useFetchingHook( async (id)=>{
        const response = await PostService.getBiID(id)  // можна і зразу params.id
        setPost(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, []);

    return (
        <div>
            <h1>Відкрито сторінку поста по ID: {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div> {post.id} {post.title} </div>

            }
        </div>
    );
};

export default PostIdPage;