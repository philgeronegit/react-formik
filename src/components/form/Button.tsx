interface ButtonProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const Button = ({ label, selected, onClick }: ButtonProps) => {
  return (
    <button
      className={`${
        selected ? "bg-blue-500" : "bg-blue-300"
      } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
