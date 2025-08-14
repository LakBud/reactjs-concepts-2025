import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="text-6xl justify-center text-center gap-2.5 p-10">
      <div>
        <h1 className="p-10">Counter</h1>
        <h1 className="text-9xl">{count}</h1>
      </div>

      <div className="btns-container">
        <button onClick={increment} className="increment  bg-black text-white p-2 m-5 rounded-xl ">
          +
        </button>
        <button onClick={decrement} className="decrement bg-black text-white p-2 m-5 rounded-xl  ">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
