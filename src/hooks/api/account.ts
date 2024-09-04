import { User } from '@/api/entities';
import { createGetQueryHook } from '@/api/helpers';

export const useGetAccountInfo = createGetQueryHook({
  endpoint: '/account',
  responseSchema: User,
  rQueryParams: { queryKey: ['account'] },
});
