import { z } from 'zod';

export const Persona = z.object({
  id: z.string().cuid2(),
  displayName: z.string(),
  avatarUrl: z.string().url().nullable(),
});

export type Persona = z.infer<typeof Persona>;
