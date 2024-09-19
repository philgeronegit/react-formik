import { ReactNode } from "react";

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor} className="block text-sm font-bold mb-2">
    {children}
  </label>
);

export default Label;
