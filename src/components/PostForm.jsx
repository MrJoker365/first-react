import { React, useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => { // деструктуризація колбеку create

    const [post, setPost] = useState({ title: "", body: ""});


    const addNewPost = (e) => { 
        e.preventDefault(); 
        const newPost = { // функція, яка передається до callback
            ...post, 
            id: Date.now()
        }
        create(newPost)
        setPost({ title: "", body: ""})
        
    
      }

    return (
        <form>
      
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Назва поста"
            />
        
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Опис поста"
            />

            <MyButton onClick={addNewPost} >Пост</MyButton>

        
        </form>
    )
}

export default PostForm;