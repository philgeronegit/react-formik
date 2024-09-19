import { ReactNode } from "react";

interface FieldsetProps {
  children: ReactNode;
  legend: string;
}

const Fieldset = ({ children, legend }: FieldsetProps) => (
  <fieldset className="border border-solid rounded border-gray-300 p-3 mb-2">
    <legend className="text-sm">{legend}</legend>
    {children}
  </fieldset>
);

export default Fieldset;
