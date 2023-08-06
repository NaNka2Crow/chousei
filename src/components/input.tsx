"use client";
import React, { useState } from "react";

const Input = ({ placeholder, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="rounded border-2 border-blue-500 text-red-500"
    />
  );
};

export default Input;
