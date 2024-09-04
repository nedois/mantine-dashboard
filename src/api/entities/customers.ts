import { z } from 'zod';
import { dateSchema } from '@/utilities/date';
import { phoneNumberSchema } from '@/utilities/phone-number';

export const Customer = z.object({
  id: z.string().cuid2(),
  number: z.string().min(1),
  fullName: z.string().min(1),
  displayName: z.string().min(1),
  email: z.string().email(),
  phoneNumber: phoneNumberSchema,
  avatarUrl: z.string().url().nullable(),
  status: z.enum(['active', 'banned', 'archived']),
  rating: z.number().min(1).max(5),
  createdAt: dateSchema,
  updatedAt: dateSchema,
});

export type Customer = z.infer<typeof Customer>;

export const CustomersMetrics = z.object({
  total: z.number(),
  active: z.number(),
  banned: z.number(),
  archived: z.number(),
});

export type CustomersMetrics = z.infer<typeof CustomersMetrics>;
