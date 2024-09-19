import { ReactNode } from "react";

interface TdProps {
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
}

export const Td = ({ children, colSpan, rowSpan }: TdProps) => (
  <td
    colSpan={colSpan}
    rowSpan={rowSpan}
    className="border border-gray-500 px-4 py-2">
    {children}
  </td>
);
