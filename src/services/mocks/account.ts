import { http, HttpResponse } from 'msw';

import { app } from '@/config';
import { generateId } from '@/utilities/uid';

const account = {
  id: generateId(),
  email: 'john.doe@example.com',
  avatarUrl: 'https://i.pravatar.cc/300?u=john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  password: '123456789',
};

export default [
  http.get(`${app.apiUrl}/account`, ({ request }) => {
    const accessToken = request.headers.get('authorization');

    if (!accessToken || accessToken.split(' ').length !== 2) {
      return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    return HttpResponse.json({ ...account, password: undefined });
  }),
];
