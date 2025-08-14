import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} value={value} type="radio" name={name} style={{ backgroundColor: color }} />
      <span className="checkmark"></span> {title}
    </label>
  );
};

export default Input;
