import { React, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";


function App() {
  
// можна викликати безліч компонентів, і всі вони будуть працювати незалежно одне від одного
  return (
    <div className="App"> 

      <Counter/> {/* таким способом викликається компонент Counter.jsx */}

      <Counter/> 
      <ClassCounter/>

    </div>
  );
}

export default App;
