import { z } from 'zod';
import { Persona } from '@/api/entities/common';
import { dateSchema } from '@/utilities/date';

export const Notification = z.object({
  id: z.string().cuid2(),
  type: z.enum(['network:request', 'project:mention']),
  title: z.string(),
  receivedAt: dateSchema,
  sentBy: Persona,
});

export type Notification = z.infer<typeof Notification>;
