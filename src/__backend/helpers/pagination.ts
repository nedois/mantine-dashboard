import { DefaultBodyType, StrictRequest } from 'msw';

export function paginate<D, R extends DefaultBodyType>(request: StrictRequest<R>, data: D[]) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page'));
  const limit = Number(url.searchParams.get('limit'));
  const lastPage = Math.ceil(data.length / limit);

  const meta = {
    total: data.length,
    perPage: limit,
    currentPage: page,
    lastPage,
    firstPage: 1,
    firstPageUrl: `${url.origin}${url.pathname}?page=1&limit=${limit}`,
    lastPageUrl: `${url.origin}${url.pathname}?page=${lastPage}&limit=${limit}`,
    nextPageUrl: `${url.origin}${url.pathname}?page=${Math.min(page + 1, lastPage)}&limit=${limit}`,
    previousPageUrl: `${url.origin}${url.pathname}?page=${Math.max(page - 1, 1)}&limit=${limit}`,
  };

  return {
    meta,
    data: data.slice((page - 1) * limit, page * limit),
  };
}

export function sort<D, R extends DefaultBodyType>(
  request: StrictRequest<R>,
  data: D[],
  fields: { name: keyof D; type: 'string' | 'number' | 'date' }[]
) {
  const url = new URL(request.url);
  const orderBy = url.searchParams.get('orderBy') as keyof D | null;
  const order = url.searchParams.get('order') === 'desc' ? 'desc' : 'asc';

  if (!orderBy) {
    return data;
  }

  const field = fields.find((f) => f.name === orderBy);
  if (!field) {
    return data;
  }

  return [...data].sort((a, b) => {
    const valueA = a[orderBy];
    const valueB = b[orderBy];

    switch (field.type) {
      case 'string':
        return order === 'asc'
          ? String(valueA).localeCompare(String(valueB))
          : String(valueB).localeCompare(String(valueA));

      case 'number':
        return order === 'asc' ? Number(valueA) - Number(valueB) : Number(valueB) - Number(valueA);

      case 'date':
        const dateA = new Date(valueA as unknown as string);
        const dateB = new Date(valueB as unknown as string);
        return order === 'asc'
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();

      default:
        return 0;
    }
  });
}
