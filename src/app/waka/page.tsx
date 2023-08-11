"use client";
import Input from "@/components/input";
import RadioButton from "@/components/radio";
import React, { ChangeEventHandler, useState } from "react";

export default function Home() {
  //inputで使うもの
  const [value, setValue] = useState("");
  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  //radioで使うもの
  const [selectedValue, setSelectedValue] = useState("option1");
  const buttonList = [
    { name: "options", value: "option1" },
    { name: "options", value: "option2" },
  ];
  const handleChangeRadio: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Input
        placeholder="なにか入力してね"
        onChange={handleChangeInput}
        value={value}
      />

      <RadioButton
        buttonList={buttonList}
        selectedValue={selectedValue}
        onChange={handleChangeRadio}
      />
    </>
  );
}
