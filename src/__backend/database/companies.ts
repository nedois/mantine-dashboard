import { faker } from "@faker-js/faker";
import { Collection } from "@msw/data";

import { CompanySchema } from "#/api/schemas";
import { uuid } from "#/utils";

export const companies = new Collection({ schema: CompanySchema });

await companies.createMany(100, () => ({
  id: uuid(),
  name: faker.company.name(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  isActive: faker.datatype.boolean(),
}));
