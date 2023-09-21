import TableHeader from "../../TableHeader";
import TableRows from "../TableRows";

type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  product: string;
  meanData: Array<any>;
  medianData: Array<any>;
  modeData: Array<any>;
};

const style = {
  borderCollapse: "collapse",
} as const;

/**
 * Table component that displays statistical data for a product.
 *
 * @template T - Type of data objects
 * @template K - Key of data objects to calculate statistics for
 * @param {TableProps<T, K>} props - Props containing data and statistical values.
 * @returns {JSX.Element} - JSX element representing the table.
 */
const Table = <T, K extends keyof T>({
  data,
  product,
  meanData,
  medianData,
  modeData,
}: TableProps<T, K>): JSX.Element => {
  // Calculate the count of duplicate Alcohol values in the data
  const classDuplicates = data.reduce((acc: any, item: any) => {
    let newItem = acc.find((i: any) => i.Alcohol === item.Alcohol);

    if (newItem) {
      newItem.count += 1;
    } else {
      acc.push({ Alcohol: item.Alcohol, count: 1 });
    }

    return acc;
  }, []);

  return (
    // Render a table with a given style
    <>
    <label className="table-heading">Data for {product}</label>
    <table style={style}>
      {/* Render the table header with columns representing unique Alcohol values */}
      <TableHeader columns={classDuplicates} />

      {/* Render the table rows with statistical data */}
      <TableRows
        product={product}
        meanData={meanData}
        medianData={medianData}
        modeData={modeData}
      />
    </table>
    </>
  );
};


export default Table;
