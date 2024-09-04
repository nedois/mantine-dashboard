import { http, HttpResponse } from 'msw';
import { apiUrl, isAuthenticated } from '@/__backend/helpers';
import { generateId } from '@/utilities/uid';

const FAKE_AUTH_ACCOUNT = {
  id: generateId(),
  email: 'john.doe@example.com',
  avatarUrl: 'https://i.pravatar.cc/300?u=john.doe@example.com',
  name: 'John Mark Doe',
  displayName: 'John Doe',
};

export default [
  // GET /account
  http.get(apiUrl('/account'), ({ request }) => {
    isAuthenticated(request);
    return HttpResponse.json(FAKE_AUTH_ACCOUNT);
  }),
];
