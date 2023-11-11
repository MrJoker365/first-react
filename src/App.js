import { React, useState } from "react";


function App() {

  const [likes, setLikes] = useState(0); // за допомогою useState можна змінювати відображення на сторінці
                                         // useState являється масивом з двох елементів:
                                             // 1. це є сам обєкт, переданий в useState
                                             // 2. це функція, яка зчитує і виводить зміни на сторінку
                                         // тому для використання цих двох елементів, використовується ДЕКОМПОЗИЦІЯ
  
  const [value, setValue] = useState("Hello");
  
  function increment(params) {
    setLikes(likes + 1) // використання 2-ї функції для зміни відображення на сторінці
    
  }

  function decrement(params) {
    setLikes(likes - 1) // 
  }


  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input 
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)} // при кожній зміні в полі буде викликатись setValue
      />


      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

    </div>
  );
}

export default App;
