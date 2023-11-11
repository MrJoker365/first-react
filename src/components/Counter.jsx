import React, { useState } from "react";

const Counter = () => {  // перший функціональний компонент

    const [count, setCount] = useState(0);

    function increment(params) {
        setCount(count + 1) 
        
      }
    
      function decrement(params) {
        setCount(count - 1) 
      }

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )

}

export default Counter; // незабувати робити export