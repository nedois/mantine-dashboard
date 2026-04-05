import { genericFactory, useProps, type Factory } from "@mantine/core";
import type { DataTableProps as MantineDataTableProps } from "mantine-datatable";
import { useRef, type ReactNode } from "react";

import { DataTableColumn } from "./data-table-column";
import { DataTableProvider, type DataTableStore, type PaginationPropKeys } from "./data-table-context";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableRenderer, type DataTableRendererProps } from "./data-table-renderer";

export type DataTableProps<T = Record<string, unknown>> = Omit<
  MantineDataTableProps<T>,
  "columns" | "groups" | PaginationPropKeys
> & {
  children: ReactNode;
};

export type DataTableFactory = Factory<{
  props: DataTableProps;
  ref: HTMLTableElement;
  signature: <T = Record<string, unknown>>(
    props: DataTableProps<T> & { ref?: React.Ref<HTMLTableElement> }
  ) => React.JSX.Element;
  staticComponents: {
    Column: typeof DataTableColumn;
    Pagination: typeof DataTablePagination;
  };
}>;

const defaultProps = {} satisfies Partial<DataTableProps>;

export const DataTable = genericFactory<DataTableFactory>((_props) => {
  const props = useProps("DataTable", defaultProps, _props);
  const { children, ...tableProps } = props;

  const storeRef = useRef<DataTableStore>({ columns: [], paginationProps: {} });

  storeRef.current.columns = [];
  storeRef.current.paginationProps = {};

  return (
    <DataTableProvider value={storeRef.current}>
      {children}
      <DataTableRenderer {...(tableProps as DataTableRendererProps)} />
    </DataTableProvider>
  );
});

DataTable.displayName = "DataTable";
DataTable.Column = DataTableColumn;
DataTable.Pagination = DataTablePagination;

export function getRowNumber(index: number, perPage: number, currentPage: number) {
  return index + 1 + perPage * (currentPage - 1);
}
