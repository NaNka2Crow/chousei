// components/RadioButton.js

import React from "react";

type ButtonItem = {
  name: string;
  value: string;
};

type Props = {
  buttonList: ButtonItem[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: React.FC<Props> = ({
  buttonList,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex space-x-4">
      {buttonList.map((item, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            className="form-radio"
            type="radio"
            name={item.name}
            value={item.value}
            checked={selectedValue === item.value}
            onChange={onChange}
          />
          <span>{item.value}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
