import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const clear = () => setInputValue("");
  const display = (value) => setInputValue(inputValue + value);
  const calculate = () => {
    try {
      setInputValue(eval(inputValue));
    } catch {
      setInputValue("Error");
    }
  };

  const buttons = ["C", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "0", "00", ".", "="];

  const handleClick = (btn) => {
    if (btn === "C") clear();
    else if (btn === "=") calculate();
    else display(btn);
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10 p-4 bg-gray-100 rounded-xl shadow-lg">
      <input
        type="text"
        className="w-full mb-4 p-3 text-right text-2xl font-mono rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={inputValue}
        readOnly
      />

      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={`
              py-4 text-lg font-semibold rounded-lg
              ${btn === "C" ? "bg-red-400 text-white hover:bg-red-500" : ""}
              ${btn === "=" ? "bg-green-400 text-white hover:bg-green-500" : ""}
              ${!["C", "="].includes(btn) ? "bg-white hover:bg-gray-200" : ""}
              transition-colors duration-200
            `}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
