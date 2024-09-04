import { http, HttpResponse } from 'msw';
import { database } from '@/__backend/database';
import { apiUrl, paginate, sort } from '@/__backend/helpers';
import { app } from '@/config';
import { pipe } from '@/utilities/pipe';

export default [
  // GET /customers
  http.get(apiUrl('/customers'), ({ request }) => {
    const url = new URL(request.url);

    const status = url.searchParams.get('status');

    return HttpResponse.json(
      pipe(
        database.customers,
        (allCustomers) =>
          status && status !== '*'
            ? allCustomers.filter((customer) => customer.status === status)
            : allCustomers,
        (filteredCustomers) =>
          sort(request, filteredCustomers, [
            { name: 'fullName', type: 'string' },
            { name: 'rating', type: 'number' },
            { name: 'createdAt', type: 'date' },
          ]),
        (sortedCustomers) => paginate(request, sortedCustomers)
      )
    );
  }),

  // GET /customers/metrics
  http.get(`${app.apiBaseUrl}/customers/metrics`, () =>
    HttpResponse.json({
      total: database.customers.length,
      active: database.customers.filter((customer) => customer.status === 'active').length,
      banned: database.customers.filter((customer) => customer.status === 'banned').length,
      archived: database.customers.filter((customer) => customer.status === 'archived').length,
    })
  ),
];
