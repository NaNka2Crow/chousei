import { FC } from "react";

type Props = {
  className: string;
};

const Header: FC<Props> = ({ className }) => {
  return (
    <>
      <header
        className={`bg-green-600 text-3xl font-bold text-white ${className}`}
      >
        使いやすい調整さん
      </header>
    </>
  );
};

export default Header;
