import { http, HttpResponse } from 'msw';
import { database } from '../database';
import { apiUrl } from '../helpers';

export default [
  // GET /atoms
  http.get(apiUrl('/atoms'), () => {
    return HttpResponse.json(database.atoms);
  }),
];
