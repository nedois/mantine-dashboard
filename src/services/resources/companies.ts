import { z } from 'zod';

import { createPaginationQueryHook } from '../helpers';

export const Company = z.object({
  id: z.string().cuid2(),
  name: z.string().min(1),
  city: z.string().min(1),
  address: z.string().min(1),
  state: z.string().length(2),
  active: z.boolean(),
});

export type Company = z.infer<typeof Company>;

const QUERY_KEY = 'companies';
const BASE_ENDPOINT = 'companies';

export const useGetCompanies = createPaginationQueryHook({
  endpoint: BASE_ENDPOINT,
  dataSchema: Company,
  rQueryParams: { queryKey: QUERY_KEY },
});
