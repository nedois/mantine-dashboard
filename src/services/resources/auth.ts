import { z } from 'zod';
import { notifications } from '@mantine/notifications';

import { dateSchema } from '@/utilities/date';
import { createPostMutationHook } from '../helpers';
import { setClientAccessToken, removeClientAccessToken } from '../axios';

export const LoginBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
  remember: z.boolean().optional(),
});

export type LoginBody = z.infer<typeof LoginBodySchema>;

const LoginResponseSchema = z.object({
  type: z.literal('bearer'),
  token: z.string(),
  expiresAt: dateSchema,
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export const useLogin = createPostMutationHook({
  endpoint: 'auth/login',
  bodySchema: LoginBodySchema,
  responseSchema: LoginResponseSchema,
  rMutationParams: {
    onSuccess: (data) => {
      setClientAccessToken(data.token);
      notifications.show({ title: 'Welcome back!', message: 'You have successfully logged in' });
    },
    onError: (error) => {
      notifications.show({ message: error.message, color: 'red' });
    },
  },
});

export const useLogout = createPostMutationHook({
  endpoint: 'auth/logout',
  bodySchema: z.null(),
  responseSchema: z.any(),
  rMutationParams: {
    onSuccess: () => {
      removeClientAccessToken();
      notifications.show({ title: 'Goodbye!', message: 'You have successfully logged out' });
    },
    onError: (error) => {
      notifications.show({ message: error.message, color: 'red' });
    },
  },
});
