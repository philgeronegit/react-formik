interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string | number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

const Input = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  min,
  max,
  step,
  disabled
}: InputProps) => (
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    min={min}
    max={max}
    step={step}
    disabled={disabled}
    className="shadow appearance-none border rounded py-2 px-3"
  />
);

export default Input;
