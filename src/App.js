import { React, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css' ;
import PostItem from "./components/PostItem";


function App() {
  
// В даному випадку в PostItem передаються Props(дані), які динамічно потім будуть виводитись
  return (
    <div className="App"> 
  
      {/* <PostItem value={"222"} item={{title: 0}} number={1} /> */} {/* для прикладу */}
      
      <PostItem post={{id: 1, title: "JavaScript", body: "Description"}} />
      <PostItem post={{id: 2, title: "Java", body: "Description"}} />

    </div>
  );
}

export default App;
