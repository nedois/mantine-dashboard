import { useState } from "react";

export interface UseDataTablePaginationProps {
  initialPage?: number;
  initialPerPage?: number;
}

export function useDataTablePagination({ initialPage = 1, initialPerPage = 25 }: UseDataTablePaginationProps = {}) {
  const [page, setPage] = useState(initialPage);
  const [perPage, setPerPage] = useState(initialPerPage);

  return { page, perPage, setPage, setPerPage };
}
