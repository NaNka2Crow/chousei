import { ComponentProps, FC } from "react";

type Props = ComponentProps<"button">;

const Button: FC<Props> = ({ children, className }) => {
  return (
    <button
      className={
        "w-full rounded-md bg-gray-700 px-3 py-1 font-bold text-white hover:bg-gray-500 " +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
