import { Key } from "react";

type TableRowsProps<T> = {
  product: string;
  meanData: Array<T>;
  medianData: Array<T>;
  modeData: Array<T>;
};

/**
 * Represents a single row of data in the table.
 *
 * @param {object} props - Props containing label and data to display in the row.
 * @returns {JSX.Element} - JSX element representing a data row.
 */
function DataRow({ label, data }: any): JSX.Element {
  return (
    <tr>
      <td>{label}</td>
      {/* Map through the data and display each element in a table cell */}
      {data?.map((el: { element: number }, index: Key | null | undefined) => (
        <td key={index}>{el.element.toFixed(3)}</td>
      ))}
    </tr>
  );
}

/**
 * Component for rendering the rows of the statistical table.
 *
 * @template T - Type of data objects
 * @template K - Key of data objects to calculate statistics for
 * @param {TableRowsProps<T, K>} props - Props containing product and statistical data.
 * @returns {JSX.Element} - JSX element representing the table rows.
 */
const TableRows = <T, K extends keyof T>({
  product,
  meanData,
  medianData,
  modeData,
}: TableRowsProps<T>): JSX.Element => {
  return (
    <tbody>
      <DataRow label={`${product} Mean`} data={meanData} />
      <DataRow label={`${product} Median`} data={medianData} />
      <DataRow label={`${product} Mode`} data={modeData} />
    </tbody>
  );
};


export default TableRows;
