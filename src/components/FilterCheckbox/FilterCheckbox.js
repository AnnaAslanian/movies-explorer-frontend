import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onChange, value, ref }) {
  return (
    <div className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={onChange}
        value={value}
        checked={value}
        onClick={ref}
      ></input>
      <span className="filter__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;