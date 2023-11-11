import { React, useState } from "react";
import Counter from "./components/Counter";


function App() {
  
// можна викликати безліч компонентів, і всі вони будуть працювати незалежно одне від одного
  return (
    <div className="App"> 

      <Counter/> {/* таким способом викликається компонент Counter.jsx */}

      <Counter/> 

    </div>
  );
}

export default App;
