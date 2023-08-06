import React, { FC, ComponentProps } from "react";

type Props = ComponentProps<"input">;

const Input: FC<Props> = (props) => {
  return (
    <input
      type="text"
      {...props}
      className="rounded border-2 border-blue-500 text-red-500"
    />
  );
};
export default Input;
