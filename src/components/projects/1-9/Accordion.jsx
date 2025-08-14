import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section
      className="w-full max-w-xl mx-auto my-8 p-2 border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white"
      key={Math.random()}
    >
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer bg-gray-100 hover:bg-gray-200 px-6 py-4 transition-colors duration-300"
        onClick={() => setIsActive(!isActive)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-2xl font-bold text-gray-600">{isActive ? "-" : "+"}</span>
      </div>

      {/* Content */}
      {isActive && (
        <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200 transition-all duration-300">
          <p className="text-sm leading-relaxed">{content}</p>
        </div>
      )}
    </section>
  );
};

export default Accordion;
