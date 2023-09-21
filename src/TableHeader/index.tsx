import { ColumnDefinitionType } from "../types";

/**
 * Props for the TableHeader component.
 *
 * @template T - Type of data objects
 * @template K - Key of data objects
 */
type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<any>>;
}

/**
 * Component for rendering the table header.
 *
 * @template T - Type of data objects
 * @template K - Key of data objects
 * @param {TableHeaderProps<T, K>} props - Props containing column definitions.
 * @returns {JSX.Element} - JSX element representing the table header.
 */
const TableHeader = <T, K extends keyof T>({ columns }: TableHeaderProps<T, K>): JSX.Element => {
  // Map through the columns to create header cells
  const headers = columns.map((column, index) => {
    return (
      <th
        key={`headCell-${index}`}
      >
        Alcohol {column.Alcohol}
      </th>
    );
  });

  return (
    <thead>
      <tr>
        <th>Measures</th>
        {/* Render the header cells */}
        {headers}
      </tr>
    </thead>
  );
};

  
  export default TableHeader;