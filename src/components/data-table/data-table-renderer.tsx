import { DataTable as MantineDataTable, type DataTableProps as MantineDataTableProps } from "mantine-datatable";

import { useDataTableContext, type PaginationPropKeys } from "./data-table-context";
import { useStableColumns } from "./use-stable-columns";

export type DataTableRendererProps = Omit<MantineDataTableProps<unknown>, "columns" | "groups" | PaginationPropKeys>;

export function DataTableRenderer(props: DataTableRendererProps) {
  const store = useDataTableContext();
  const columns = useStableColumns(store.columns);

  const merged = {
    columns,
    ...props,
    ...store.paginationProps,
  } as MantineDataTableProps<unknown>;

  return <MantineDataTable {...merged} />;
}
