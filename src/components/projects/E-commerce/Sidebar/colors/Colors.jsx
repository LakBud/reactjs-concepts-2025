import React from "react";
import Input from "../../components/input";
import "./Colors.css";

const Colors = React.memo(({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test3" />
        <span className="checkmark all"></span>All
      </label>

      <Input handleChange={handleChange} value="black" title="black" name="test3" color="black" />
      <Input handleChange={handleChange} value="blue" title="blue" name="test3" color="blue" />
      <Input handleChange={handleChange} value="red" title="red" name="test3" color="red" />
      <Input handleChange={handleChange} value="green" title="green" name="test3" color="green" />
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="white" name="test3" />
        <span className="checkmark" style={{ background: "white", border: "2px solid black", color: "black" }}>
          White
        </span>
      </label>
    </div>
  );
});

export default Colors;
