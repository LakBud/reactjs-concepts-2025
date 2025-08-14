// step 1: useEffect

import React, { useEffect, useState } from "react";

const BasicEffect = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number > 0) {
      console.log(`UseEffect ${number}`);
    }
  }, [number]);

  return (
    <>
      <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number + 1)}>Click</button>
      </div>
    </>
  );
};

export default BasicEffect;
