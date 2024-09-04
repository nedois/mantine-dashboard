import { http, HttpResponse } from 'msw';
import { z } from 'zod';
import { apiUrl, validateRequestUsing } from '@/__backend/helpers';
import { date } from '@/utilities/date';
import { generateId } from '@/utilities/uid';

const TOKEN_EXPIRATION_IN_HOURS = 24;

export default [
  // POST /auth/login
  http.post(apiUrl('/auth/login'), async ({ request }) => {
    const schema = z.object({
      email: z.string().email(),
      password: z.string(),
      remember: z.boolean().optional(),
    });

    const data = await validateRequestUsing(request, schema);

    if (data.password !== '123456789' || data.email !== 'john.doe@example.com') {
      return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    return HttpResponse.json({
      type: 'bearer',
      token: generateId(),
      expiresAt: date().add(TOKEN_EXPIRATION_IN_HOURS, 'hour'),
    });
  }),

  // POST /auth/logout
  http.post(apiUrl('/auth/logout'), async () => {
    return new HttpResponse(null, { status: 200 });
  }),
];
