// Checkbox.js

import React from "react";

const Checkbox = ({ label, checked, onChange, name }) => {
  return (
    <div className="form-check form-switch">
      <label>{label}</label>
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Checkbox;
