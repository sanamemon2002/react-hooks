import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import DataFetcher from './Component/Datafetcher';
import { useSelector, useDispatch } from "./CounterContext";
import React, { useState, useRef } from "react";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => {
  const count1 = useSelector((state) => state.value); 
  const dispatch = useDispatch(); 

  const [count, setCount] = useState(0);
  const inputRef = useRef(""); 

  
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  
  const updateRefValue = () => {
    inputRef.current = `Updated at count ${count}`;
    console.log("Ref value updated:", inputRef.current); 
  };


  return (
    <>
    <div>
      <Counter />
      <DataFetcher />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter with useSelector & useDispatch </h1>
      <h2>{count1}</h2>
      <button onClick={() => dispatch({ type: "increment" })} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })} disabled={count === 0}>
        Decrement
      </button>
    </div>
    </div>


    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Avoid Re-renders with useRef</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment Counter
      </button>
      <button onClick={updateRefValue}>Update Ref Value</button>
      <p>
        Ref Value (Console only): {inputRef.current} 
      </p>
    </div>

    <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
</Router>
    </>
    
  );
}

export default App;
