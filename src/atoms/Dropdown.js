import React from "react";

const Dropdown = ({ label, options, selectedOption, onChange, name }) => {
  return (
    <div className="mb-2 ">
      <label className="form-label">{label}</label>
      <div className="input-group ">
        <select
          className="form-select"
          value={selectedOption}
          onChange={onChange}
          name={name}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
