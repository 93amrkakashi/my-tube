import React from "react";
// import { Link } from "react-router-dom";
import { categories } from "../assets/categories";

function Sidebar({selectCategory, setselectCategory}) {
  return (
    <div className="sidebar">
      <div className="links">
        {categories.map((category) => (
          <div className="link">
            {/* <Link to={`${category.value}`}> */}
            <p onClick={() => setselectCategory(category.name)}>{category.name}</p>
            {/* </Link> */}
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Sidebar;
