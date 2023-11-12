import { React, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css' ;
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";


function App() {

  const [posts, setPost] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "Java", body: "Description"}
  ])

  const [posts2, setPost2] = useState([
    {id: 1, title: "Python", body: "Description"},
    {id: 2, title: "Ruby", body: "Description"}
  ])
  

  return (
    <div className="App"> 

      <PostList posts={posts} title="Список 1"/>
      <PostList posts={posts2} title="Список 2"/>


    </div>
  );
}

export default App;
