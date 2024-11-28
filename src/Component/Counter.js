import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); 
  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) { 
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter with useState</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
