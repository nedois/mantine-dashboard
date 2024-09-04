import { z } from 'zod';

export const Atom = z.object({
  id: z.string().cuid2(),
  number: z.number().int().positive(),
  name: z.string().min(1),
  symbol: z.string().min(1).max(3),
  mass: z.number().positive(),
});

export type Atom = z.infer<typeof Atom>;
