import { useDataTableContext, type DataTablePaginationProps } from './data-table-context';

export type { DataTablePaginationProps };

export function DataTablePagination(props: Partial<DataTablePaginationProps>) {
  const store = useDataTableContext();
  Object.assign(store.paginationProps, props);
  return null;
}
