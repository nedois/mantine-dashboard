import { z } from 'zod';

import { createGetQueryHook } from '../helpers';

export const Atom = z.object({
  id: z.string().cuid2(),
  number: z.number().int().positive(),
  name: z.string().min(1),
  symbol: z.string().min(1).max(3),
  mass: z.number().positive(),
});

export type Atom = z.infer<typeof Atom>;

const QUERY_KEY = 'atoms';
const BASE_ENDPOINT = 'atoms';

export const useGetAtoms = createGetQueryHook({
  endpoint: BASE_ENDPOINT,
  responseSchema: z.array(Atom),
  rQueryParams: { queryKey: QUERY_KEY },
});
