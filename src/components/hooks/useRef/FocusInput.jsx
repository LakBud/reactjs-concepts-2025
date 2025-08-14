// 1

import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null);

  const FocusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputElement} placeholder="Enter" />
      <button onClick={() => FocusInput()}>Focus</button>
    </div>
  );
};

export default FocusInput;
