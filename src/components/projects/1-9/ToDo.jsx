import { useState } from "react";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return;
    setTodos((prevTodos) => [...prevTodos, { text: input, id: Math.floor(Math.random() * 10000) }]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My ToDo List</h1>

      <div className="flex mb-6">
        <input
          type="text"
          placeholder="New Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-3 w-64 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-r-xl font-semibold shadow-md transition-transform transform hover:scale-105"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md space-y-4">
        {todos.map(({ text, id }) => (
          <li
            key={id}
            className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md transition hover:shadow-lg"
          >
            <span className="text-gray-800">{text}</span>
            <button
              onClick={() => removeTodo(id)}
              className="text-red-500 font-bold px-3 py-1 rounded-lg hover:bg-red-100 transition"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
