"use client";
import React, { ChangeEventHandler, FC, ComponentProps, useState } from "react";

type Props = ComponentProps<"input">;

const Input: FC<Props> = ({ placeholder, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
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