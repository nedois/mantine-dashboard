import { Customer, CustomersMetrics } from '@/api/entities';
import { createGetQueryHook, createPaginationQueryHook, SortableQueryParams } from '@/api/helpers';

const QUERY_KEY = 'customers';
const BASE_ENDPOINT = 'customers';

export const useGetCustomers = createPaginationQueryHook<
  typeof Customer,
  SortableQueryParams & { status?: Customer['status'] }
>({
  endpoint: BASE_ENDPOINT,
  dataSchema: Customer,
  rQueryParams: { queryKey: [QUERY_KEY] },
});

export const useGetCustomersMetrics = createGetQueryHook({
  endpoint: `${BASE_ENDPOINT}/metrics`,
  responseSchema: CustomersMetrics,
  rQueryParams: { queryKey: [QUERY_KEY, { resource: 'metrics' }] },
});
