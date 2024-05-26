import { app } from '@/config';
import { PaginationMeta } from '../helpers';
import { CustomDate } from '@/utilities/date';

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

export function sort<T>(
  requestUrl: string,
  data: T[],
  fields: { name: keyof T; type: 'string' | 'number' | 'date' }[]
) {
  const url = new URL(requestUrl);

  const orderBy = url.searchParams.get('orderBy');
  const order = url.searchParams.get('order');

  let filteredData = [...data];

  if (orderBy) {
    filteredData = filteredData.sort((a, b) => {
      const field = fields.find((f) => f.name === orderBy);

      if (!field) {
        return 0;
      }

      if (field.type === 'string') {
        return order === 'asc'
          ? String(a[field.name]).localeCompare(String(b[field.name]))
          : String(b[field.name]).localeCompare(String(a[field.name]));
      }

      if (field.type === 'number') {
        return order === 'asc'
          ? Number(a[field.name]) - Number(b[field.name])
          : Number(b[field.name]) - Number(a[field.name]);
      }

      if (field.type === 'date') {
        const dateA = a[field.name] as CustomDate;
        const dateB = b[field.name] as CustomDate;

        return order === 'asc' ? dateA.diff(dateB) : dateB.diff(dateA);
      }

      return 0;
    });
  }

  return filteredData;
}
