import { createSafeContext } from "@mantine/core";
import type {
  DataTableColumn as MantineDataTableColumn,
  DataTableProps as MantineDataTableProps,
} from "mantine-datatable";

export type PaginationPropKeys =
  | "getPaginationControlProps"
  | "loadingText"
  | "onPageChange"
  | "onRecordsPerPageChange"
  | "page"
  | "paginationActiveBackgroundColor"
  | "paginationActiveTextColor"
  | "paginationSize"
  | "paginationText"
  | "paginationWrapBreakpoint"
  | "recordsPerPage"
  | "recordsPerPageLabel"
  | "recordsPerPageOptions"
  | "totalRecords";

export type DataTablePaginationProps = Pick<MantineDataTableProps<unknown>, PaginationPropKeys>;

export interface DataTableStore {
  columns: MantineDataTableColumn<unknown>[];
  paginationProps: Partial<DataTablePaginationProps>;
}

export const [DataTableProvider, useDataTableContext] = createSafeContext<DataTableStore>(
  "DataTable component was not found in tree"
);
