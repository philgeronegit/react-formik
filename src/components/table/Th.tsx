interface ThProps {
  colSpan?: number;
  children?: React.ReactNode;
}

const Th = ({ colSpan, children }: ThProps) => {
  return (
    <th colSpan={colSpan} className="border-e  border-gray-500">
      {children}
    </th>
  );
};

export default Th;
