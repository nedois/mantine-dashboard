import { z } from 'zod';

export const User = z
  .object({
    id: z.string().cuid2(),
    email: z.string().email(),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    avatarUrl: z.string().url().nullable(),
  })
  .transform((data) => ({
    ...data,
    displayName: `${data.firstName} ${data.lastName}`,
  }));

export type User = z.infer<typeof User>;
