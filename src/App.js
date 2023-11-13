import { React, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css' ;
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {

  const [posts, setPost] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "Java", body: "Description"}
  ])


  const addNewPost = (e) => { // e -- це те ж саме що event (для себе скоротив)
    e.preventDefault(); // вимикає дефолтне перезавантаження
    console.log(title);
  }

  const [title, setTitle] = useState ("scasc")  

  return (
    <div className="App"> 

      <form>
        {/* Керований компонент(input) */}
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder="Назва поста"
        />
        <MyInput type="text" placeholder="Опис поста"/>
        <MyButton onClick={addNewPost} >Пост</MyButton> 

        <PostList posts={posts} title="Список 1"/>

      </form>


    </div>
  );
}

export default App;
