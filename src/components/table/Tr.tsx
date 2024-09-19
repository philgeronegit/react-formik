import { ReactNode } from "react";

export const Tr = ({ children }: { children: ReactNode }) => (
  <tr className="border-b border-gray-500">{children}</tr>
);
