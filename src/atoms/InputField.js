import React from "react";

const InputField = ({ label, value, onChange, type, name, min, einheit }) => {
  return (
    <div className="mb-2 ">
      <label className="form-label">{label}</label>
      <div className="input-group ">
        <input
          className="form-control"
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          min={min}
        />
        <span className="input-group-text">{einheit}</span>
      </div>
    </div>
  );
};

export default InputField;
