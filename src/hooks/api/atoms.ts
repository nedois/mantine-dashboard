import { Atom } from '@/api/entities';
import { createGetQueryHook } from '@/api/helpers';

export const useGetAtoms = createGetQueryHook({
  endpoint: '/atoms',
  responseSchema: Atom.array(),
  rQueryParams: { queryKey: ['atoms'] },
});
