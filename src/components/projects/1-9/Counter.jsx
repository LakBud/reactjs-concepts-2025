import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-6 text-gray-800">Counter</h1>

      {/* Count Display */}
      <div className="bg-white rounded-2xl shadow-lg px-10 py-6 mb-8 w-60 text-center">
        <h2 className="text-7xl font-mono">{count}</h2>
      </div>

      {/* Buttons */}
      <div className="flex gap-6">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
