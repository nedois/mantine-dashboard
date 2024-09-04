import { z } from 'zod';

export const User = z.object({
  id: z.string().cuid2(),
  email: z.string().email(),
  name: z.string().min(1),
  displayName: z.string().min(1),
  avatarUrl: z.string().url().nullable(),
});

export type User = z.infer<typeof User>;
