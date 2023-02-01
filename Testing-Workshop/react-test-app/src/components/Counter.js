import React, { useState } from "react";

export default function Counter({ title }) {
  const [counter, setCounter] = useState(0);
  const [inputValue,setInputValue]=useState("1")

  const increment = () => {
    setCounter(counter + Number(inputValue));
  };
  const decrement = () => {
    setCounter(counter - Number(inputValue));
  };
  const reset = () => {
    setCounter(0);
    setInputValue("1")
  };
  return (
    <div style={{ padding: "20px", border: "2px solid blue" }}>
      <h1 data-testid="count">
        {title}: {counter}
      </h1>
      <input type="number" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
