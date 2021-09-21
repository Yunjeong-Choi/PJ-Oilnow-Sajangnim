import { FunctionComponent } from "react";
import { List } from 'react-virtualized';
import TableRow from "./tableRow";

const list = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
  72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
  96, 97, 98, 99
];

interface RowRendererProps {
  key: string;
  style?: any;
  index: number;
  isScrolling?: boolean;
  isVisible?: boolean;
}

function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}: RowRendererProps) {
  return (
    <div key={key} style={style} >
      <TableRow />
    </div>
  )
}

const TableBody: FunctionComponent = () => {
  return (
    <List width={300} height={300} rowCount={list.length} rowHeight={20} rowRenderer={rowRenderer} />
  );
};

export default TableBody;