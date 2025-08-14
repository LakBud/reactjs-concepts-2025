import React from "react";
import { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);

  return (
    <>
      <div>{sw ? <span>Dark</span> : <span>Light</span>}</div>

      <br />
      <input type="text" key={sw ? "dark" : "light"} />
      <button onClick={() => setSw((s) => !s)}>Switch</button>
    </>
  );
};

export default Switcher;
