import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetchingHook} from "../hooks/useFetchingHook";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {

    const params = useParams(); // вивід динамічної складової URL

    const[post, setPost] = useState([]);
    const[comments, setComments] = useState([])

    const[fetchPostById, isLoading, error] = useFetchingHook( async (id)=>{
        const response = await PostService.getBiID(id)  // можна і зразу params.id
        setPost(response.data);
    })
    const[fetchComments, isComLoading, comError] = useFetchingHook( async (id)=>{
        const response = await PostService.getCommentsByPostId(id)  // можна і зразу params.id
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []);

    return (
        <div>
            <h1>Відкрито сторінку поста по ID: {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div> {post.id} {post.title} </div>

            }
            <h1> Коментарі </h1>

            {isComLoading
                ? <Loader/>
                : <div>

                    {comments.map(com =>
                        <div key={com.id} style={{marginTop: 15}}>
                            <h5>{com.email}</h5>
                            <div>{com.body} </div>
                        </div>
                    )}

                </div>

            }
        </div>
    );
};

export default PostIdPage;