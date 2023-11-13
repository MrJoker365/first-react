import { React, useRef, useState } from "react";
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

    // useRef() рекомендується в крайніх випадках
    console.log(bodyInputRef1.current.value); // useRef має лише 1 метод який викликає DOM елемент (.current)
                                              // якщо забрати .value , виведеться HTML код
    console.log(bodyInputRef2.current.value);
  }

  const [title, setTitle] = useState ("scasc")  
  const bodyInputRef1 = useRef(); // 
  const bodyInputRef2 = useRef(); // 


  return (
    <div className="App"> 

      <form>
        {/* Некерований компонент useRef() */}
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder="Назва поста"
        />

        <input ref={bodyInputRef1} type="text"/>  {/* передача інфи до useRef(включно з HTML кодом) */}
        
        <MyInput ref={bodyInputRef2} type="text" placeholder="Опис поста"/>  {/* Для того щоб працював 
                                                                            власний компонент з useRef, потрібно налаштувати 
                                                                            сам компонент MyInput.jsx*/}

        <MyButton onClick={addNewPost} >Пост</MyButton> 

        <PostList posts={posts} title="Список 1"/>

      </form>


    </div>
  );
}

export default App;
