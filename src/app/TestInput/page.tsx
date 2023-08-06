"use client";
import Input from "@/components/input";
import React, { ChangeEventHandler, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return (
    <>
      <Input
        placeholder="なにか入力してね"
        onChange={handleChange}
        value={value}
      />
    </>
  );
}
