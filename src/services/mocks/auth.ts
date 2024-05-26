import { http, HttpResponse } from 'msw';

import { app } from '@/config';
import { date } from '@/utilities/date';
import { generateId } from '@/utilities/uid';
import { LoginBodySchema } from '../resources/auth';
import { account } from './account';

const TOKEN_EXPIRATION_IN_HOURS = 24;

export default [
  http.post(`${app.apiUrl}/auth/login`, async ({ request }) => {
    const body = await request.json();

    const { data, error, success } = LoginBodySchema.safeParse(body);

    if (!success) {
      return HttpResponse.json({ message: 'Invalid input', ...error.flatten() }, { status: 422 });
    }

    if (data.password !== account.password || data.email !== account.email) {
      return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    return HttpResponse.json({
      type: 'bearer',
      token: generateId(),
      expiresAt: date().add(TOKEN_EXPIRATION_IN_HOURS, 'hour'),
    });
  }),
];
