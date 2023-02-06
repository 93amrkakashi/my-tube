import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { root } from "../../routes";

function Navbar({ selectCategory, setselectCategory }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const handlesearch = (data) => {
    setselectCategory(data.search)
  };

  return (
    <div className="navbar">
      <Link to={root}>
        <div className="logo">
          <i className="fa-brands fa-youtube"></i>
          <h3> MYTUBE </h3>
        </div>
      </Link>

      <div className="search">
        <form onSubmit={handleSubmit(handlesearch)}>
          <input
            type="text"
            placeholder="Search here ...."
            {...register("search")}
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
