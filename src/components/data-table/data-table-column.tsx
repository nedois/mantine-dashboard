import type { DataTableColumn as MantineDataTableColumn } from "mantine-datatable";

import { useDataTableContext } from "./data-table-context";

export function DataTableColumn<T = Record<string, unknown>>(props: MantineDataTableColumn<T>) {
  const store = useDataTableContext();

  if (!store.columns.some((column) => column.accessor === props.accessor)) {
    store.columns.push(props as MantineDataTableColumn<unknown>);
  }

  return null;
}
