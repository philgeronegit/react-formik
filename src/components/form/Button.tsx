import { ReactNode } from "react";

interface ButtonProps {
  selected?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, selected, onClick }: ButtonProps) => {
  return (
    <button
      className={`${
        selected ? "bg-blue-500" : "bg-blue-300"
      } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
