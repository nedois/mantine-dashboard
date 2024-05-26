import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

import { app } from '@/config';
import { generateId } from '@/utilities/uid';
import { createMany } from '@/utilities/factory';
import { date } from '@/utilities/date';
import { pipe } from '@/utilities/pipe';
import { Customer, generateCustomerNumber } from '../resources/customers';
import { paginate, sort } from './helpers';

const customers: Omit<Customer, 'displayName'>[] = createMany(50, () => {
  const email = faker.internet.email().toLocaleLowerCase();

  return {
    email,
    id: generateId(),
    number: generateCustomerNumber(),
    fullName: faker.person.fullName(),
    phoneNumber: faker.helpers.fromRegExp('+24492[0-9]{7}'),
    avatarUrl: `https://i.pravatar.cc/300?u=${email}`,
    createdAt: date(faker.date.past()),
    updatedAt: date(faker.date.recent()),
    status: faker.helpers.arrayElement(['active', 'banned', 'archived']),
    rating: faker.number.float({ min: 1, max: 5 }),
  };
});

export default [
  http.get(`${app.apiUrl}/customers`, ({ request }) => {
    const url = new URL(request.url);

    const status = url.searchParams.get('status');

    return HttpResponse.json(
      pipe(
        customers,
        (allCustomers) =>
          status && status !== '*'
            ? allCustomers.filter((customer) => customer.status === status)
            : allCustomers,
        (filteredCustomers) =>
          sort(request.url, filteredCustomers, [
            { name: 'fullName', type: 'string' },
            { name: 'rating', type: 'number' },
            { name: 'createdAt', type: 'date' },
          ]),
        (sortedCustomers) => paginate(request.url, sortedCustomers)
      )
    );
  }),

  http.get(`${app.apiUrl}/customers/metrics`, () =>
    HttpResponse.json({
      total: customers.length,
      active: customers.filter((customer) => customer.status === 'active').length,
      banned: customers.filter((customer) => customer.status === 'banned').length,
      archived: customers.filter((customer) => customer.status === 'archived').length,
    })
  ),
];
