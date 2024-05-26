import { app } from '@/config';
import { PaginationMeta } from '../helpers';

export function paginate<T>(requestUrl: string, data: T[]) {
  const url = new URL(requestUrl);
  const page = Number(url.searchParams.get('page'));
  const limit = Number(url.searchParams.get('limit'));
  const lastPage = Math.ceil(data.length / limit);

  const meta: PaginationMeta = {
    total: data.length,
    perPage: limit,
    currentPage: page,
    lastPage,
    firstPage: 1,
    firstPageUrl: `${app.apiUrl}/companies?page=1&limit=${limit}`,
    lastPageUrl: `${app.apiUrl}/companies?page=${lastPage}&limit=${limit}`,
    nextPageUrl: page < lastPage ? `${app.apiUrl}/companies?page=${page + 1}&limit=${limit}` : null,
    previousPageUrl: page > 1 ? `${app.apiUrl}/companies?page=${page - 1}&limit=${limit}` : null,
  };

  return {
    meta,
    data: data.slice((page - 1) * limit, page * limit),
  };
}
