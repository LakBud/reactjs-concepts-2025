import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Reset() {
    setCount(0);
  }

  function Decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
