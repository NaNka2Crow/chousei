import { FC } from "react";

type Props = {
  p: string;
};

const Header: FC<Props> = ({ p }) => {
  return (
    <>
      <header className={`bg-green-600 p-${p} text-3xl font-bold text-white`}>
        使いやすい調整さん
      </header>
    </>
  );
};

export default Header;
