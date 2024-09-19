import { ReactNode } from "react";

interface TableProps {
  thead: ReactNode;
  children?: ReactNode;
}

export const Table = ({ thead, children }: TableProps) => (
  <table className="w-full border border-gray-500">
    <thead>{thead}</thead>
    <tbody>{children}</tbody>
  </table>
);
