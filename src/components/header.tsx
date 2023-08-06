import { FC } from "react";

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return <header className="bg-red-300 py-10">{title}</header>;
};

export default Header;
