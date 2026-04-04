import { useState } from "react";

export interface UsePaginationProps {
  initialPage?: number;
  initialPerPage?: number;
}

export function usePagination({ initialPage = 1, initialPerPage = 25 }: UsePaginationProps = {}) {
  const [page, setPage] = useState(initialPage);
  const [perPage, setPerPage] = useState(initialPerPage);

  return { page, perPage, setPage, setPerPage };
}
