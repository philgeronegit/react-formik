import { ReactNode } from "react";

const DivContainer = ({ children }: { children: ReactNode }) => (
  <div className="mb-2">{children}</div>
);

export default DivContainer;
