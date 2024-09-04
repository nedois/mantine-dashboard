import { Company } from '@/api/entities';
import { createPaginationQueryHook } from '@/api/helpers';

export const useGetCompanies = createPaginationQueryHook({
  endpoint: '/companies',
  dataSchema: Company,
  rQueryParams: { queryKey: ['companies'] },
});
