import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white max-w-xl w-full p-8 rounded-2xl shadow-lg text-center relative">
        <p className="text-lg md:text-xl text-gray-700 italic transition duration-500">"{testimonials[currentIndex].quote}"</p>
        <p className="mt-4 text-gray-900 font-semibold">- {testimonials[currentIndex].author}</p>

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevClick}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Prev
          </button>
          <button
            onClick={handleNextClick}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
