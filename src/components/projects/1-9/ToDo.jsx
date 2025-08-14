import { useState } from "react";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmit() {
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10000),
      });
    });

    setInput("");
  }

  function removeTodo(id) {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  }

  return (
    <div className="bg-[#fcfff3] p-[50px]">
      <input
        className="p-[15px] border-none outline-none bg-[#f5f9eb] w-[300px] mr-[10px]"
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        className="rounded-[100px] bg-[#454545] outline-none border-none text-white cursor-pointer p-[10px] px-[20px]"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <ul className="mt-[3rem]">
        {todos.map(({ text, id }) => (
          <li key={id} className="list-none flex justify-between items-center bg-[#f5f9eb] py-[7px] px-[20px] m-[10px] font-sans">
            <span>{text}</span>
            <button className="py-[5px] px-[10px] cursor-pointer" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
