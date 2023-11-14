import { React, useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css' ;
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "Java", body: "Description"}
  ])



// 58 ХВ

  const createPost = (newPost) => { // безпосередньо сам callback
    setPosts([...posts, newPost])
  }
  
  return (
    <div className="App"> 

     {/* Для того, щоб отримати інформацію з дочірнього класу, потрібно створити колбек */}
      <PostForm create={createPost}/> {/* тут буде передаватись власний колбек */}

      <PostList posts={posts} title="Список 1"/>


    </div>
  );
}

export default App;
