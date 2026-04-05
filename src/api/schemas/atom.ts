import { z } from "zod";

export const AtomSchema = z.object({
  id: z.uuid(),
  number: z.number(),
  name: z.string(),
  symbol: z.string(),
  mass: z.number(),
});

export type Atom = z.infer<typeof AtomSchema>;
