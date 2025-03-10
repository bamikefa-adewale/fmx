import { TableCell, TableRow } from "./ui/table";

const SkeletonTableRow = () => (
  <TableRow className="animate-pulse border-b">
    {[...Array(5)].map((_, i) => (
      <TableCell key={i} className="px-2 md:px-4 py-2 md:py-3">
        <div className="h-4 w-full bg-gray-200 rounded-md"></div>
      </TableCell>
    ))}
  </TableRow>
);
export default SkeletonTableRow;