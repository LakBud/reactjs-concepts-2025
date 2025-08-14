import React from "react";
import Input from "../../components/input";
import "./Category.css";

const Category = React.memo(({ handleChange }) => {
  const groupName = "category";

  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name={groupName} />
          <span className="checkmark">All</span>
        </label>
        <Input handleChange={handleChange} value="sneakers" title="Sneakers" name={groupName} />
        <Input handleChange={handleChange} value="flats" title="Flats" name={groupName} />
        <Input handleChange={handleChange} value="sandals" title="Sandals" name={groupName} /> {/* Fixed name */}
        <Input handleChange={handleChange} value="heels" title="Heels" name={groupName} />
      </div>
    </div>
  );
});

export default Category;
