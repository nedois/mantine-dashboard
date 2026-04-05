import type { DataTableSortStatus } from "mantine-datatable";
import { useState } from "react";

export interface UseDataTableSortProps {
  defaultSort?: string;
}

export function useDataTableSort({ defaultSort = "" }: UseDataTableSortProps = {}) {
  const [status, setStatus] = useState<DataTableSortStatus>(() => {
    return defaultSort.startsWith("-")
      ? { columnAccessor: defaultSort.slice(1), direction: "desc" }
      : { columnAccessor: defaultSort, direction: "asc" };
  });

  const query = status.columnAccessor
    ? status.direction === "desc"
      ? `-${status.columnAccessor}`
      : status.columnAccessor
    : undefined;

  return { status, setStatus, query };
}
