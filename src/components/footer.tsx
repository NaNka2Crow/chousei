import { FC } from "react";

type Props = {
  className: string;
};

const Footer: FC<Props> = ({ className }) => {
  return (
    <>
      <header
        className={`bg-green-600 text-3xl font-bold text-white ${className}`}
      >
        フッター
      </header>
    </>
  );
};

export default Footer;
