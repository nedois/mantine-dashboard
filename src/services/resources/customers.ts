import { z } from 'zod';
import { customAlphabet } from 'nanoid';

import { phoneNumberSchema } from '@/utilities/phone-number';
import { dateSchema } from '@/utilities/date';
import { createGetQueryHook, createPaginationQueryHook } from '../helpers';

export function generateCustomerNumber() {
  return customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 12)();
}

function generateDisplayName(fullName: string) {
  const name = fullName.split(' ');
  return `${name.at(0)} ${name.at(-1)}`;
}

export const Customer = z
  .object({
    id: z.string().cuid2(),
    number: z.string().min(1),
    fullName: z.string().min(1),
    email: z.string().email(),
    phoneNumber: phoneNumberSchema,
    avatarUrl: z.string().url().nullable(),
    status: z.enum(['active', 'banned', 'archived']),
    rating: z.number().min(1).max(5),
    createdAt: dateSchema,
    updatedAt: dateSchema,
  })
  .transform((data) => ({
    ...data,
    displayName: generateDisplayName(data.fullName),
  }));

export type Customer = z.infer<typeof Customer>;

const QUERY_KEY = 'customers';
const BASE_ENDPOINT = 'customers';

export const useGetCustomers = createPaginationQueryHook<
  typeof Customer,
  {
    status?: Customer['status'];
    orderBy?: 'fullName' | 'rating' | 'createdAt';
    order?: 'asc' | 'desc';
  }
>({
  endpoint: BASE_ENDPOINT,
  dataSchema: Customer,
  rQueryParams: { queryKey: QUERY_KEY },
});

export const CustomersMetrics = z.object({
  total: z.number(),
  active: z.number(),
  banned: z.number(),
  archived: z.number(),
});

export type CustomersMetrics = z.infer<typeof CustomersMetrics>;

export const useGetCustomersMetrics = createGetQueryHook({
  endpoint: `${BASE_ENDPOINT}/metrics`,
  responseSchema: CustomersMetrics,
  rQueryParams: { queryKey: [QUERY_KEY, 'metrics'] },
});
