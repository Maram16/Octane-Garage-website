import React from 'react';

function CardInput({ label, type, placeholder, value, onChange, maxLength, required }) {
  return (
    <div className="card-input">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        required={required}
      />
    </div>
  );
}

export default CardInput;