import { React, useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css' ;
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "Java", body: "Description"}
  ])

  // const [title, setTitle] = useState ("TiTLE")  
  // const [body, setBody] = useState ("BODY")  

  const [post, setPost] = useState({ title: "", body: ""})


  const addNewPost = (e) => { // e -- це те ж саме що event (для себе скоротив)
    e.preventDefault(); // вимикає дефолтне перезавантаження

    /*
    const newPost = {
      id: Date.now(), // завжди має бути унікальне значення
                      // у PostList.jsx потім передається як key={post.id} через .map
      title,
      body
    }
    setPosts([...posts, newPost])  // така концепція добавлення нового поста
    */

    // setTitle("") // Обнуляєм поля після нажимання кнопки
    // setBody("")  //

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: "", body: ""})

  }

  
  return (
    <div className="App"> 

      <form>
      
        <MyInput 
          // value={title}
          // onChange={e => setTitle(e.target.value)}
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})} 
          type="text" 
          placeholder="Назва поста"
        />
        
        <MyInput
          // value={body}
          // onChange={e => setBody(e.target.value) } 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})} 
          type="text" 
          placeholder="Опис поста"
        />  

        <MyButton onClick={addNewPost} >Пост</MyButton> 

        <PostList posts={posts} title="Список 1"/>

      </form>


    </div>
  );
}

export default App;
