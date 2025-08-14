import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");
  const inputRef = useRef(null);

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowInput(false);
      setBgColor("bg-white");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleIconClick = () => {
    setShowInput(true);
    setBgColor("bg-gray-800");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <section
      className={`flex items-center p-2 rounded-full shadow-md transition-colors duration-300 w-64 ${bgColor}`}
      ref={inputRef}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-4 py-2 rounded-full focus:outline-none bg-gray-100 text-gray-800 placeholder-gray-500"
        />
      ) : (
        <FaSearch
          onClick={handleIconClick}
          className="text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200"
        />
      )}
    </section>
  );
};

export default HiddenSearchBar;
