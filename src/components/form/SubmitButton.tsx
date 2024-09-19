interface SubmitButtonProps {
  label: string;
  disabled?: boolean;
}

const SubmitButton = ({ label, disabled }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${
        disabled ? "bg-gray-300" : "bg-blue-500"
      } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>
      {label}
    </button>
  );
};

export default SubmitButton;
