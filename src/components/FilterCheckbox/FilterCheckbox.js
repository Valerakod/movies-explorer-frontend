import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onFilter, isShortMovies }) {
  return (
    <form className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={onFilter}
        checked={isShortMovies}
        required
      ></input>
      <span className="filter__title">Short films</span>
    </form>
  );
}

export default FilterCheckbox;
