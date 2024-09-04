import { http, HttpResponse } from 'msw';
import { database } from '@/__backend/database';
import { apiUrl, paginate } from '@/__backend/helpers';

export default [
  // GET /companies
  http.get(apiUrl('/companies'), ({ request }) => {
    return HttpResponse.json(paginate(request, database.companies));
  }),
];
