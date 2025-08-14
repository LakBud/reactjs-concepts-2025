import { useState } from "react";

const ToggleBackgroundColor = () => {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => setIsDark(!isDark);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-yellow-400" : "bg-white text-gray-900"
      }`}
    >
      <button
        onClick={handleClick}
        className={`mb-10 px-6 py-3 rounded-full font-semibold border-2 transition-colors duration-300 ${
          isDark
            ? "bg-gray-900 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
            : "bg-white border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
        }`}
      >
        {isDark ? "Black Theme" : "White Theme"}
      </button>

      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          Welcome To a <br /> Real World..
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
