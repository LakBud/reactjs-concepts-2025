// 2

import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${counter}`;
  });

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </>
  );
};

export default CounterEffect;
