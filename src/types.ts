import { ReactNode } from "react";

/**
 * Type definition for defining columns in a table.
 *
 * @template T - Type of data objects
 */
export type ColumnDefinitionType<T> = {
    // The title or label to display for the column (can be a ReactNode).
    Alcohol: ReactNode;
  
    // The key representing the column's data in each data object.
    key: keyof T;
  
    // The header text to display for the column.
    header: string;
  }