import { http, HttpResponse } from 'msw';
import { database } from '@/__backend/database';
import { apiUrl, isAuthenticated } from '@/__backend/helpers';

export default [
  // GET /notifications
  http.get(apiUrl('/notifications'), ({ request }) => {
    isAuthenticated(request);
    return HttpResponse.json(database.notifications);
  }),
];
