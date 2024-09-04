import { z } from 'zod';

export const Company = z.object({
  id: z.string().cuid2(),
  name: z.string().min(1),
  city: z.string().min(1),
  address: z.string().min(1),
  state: z.string().length(2),
  active: z.boolean(),
});

export type Company = z.infer<typeof Company>;
