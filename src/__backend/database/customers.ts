import { faker } from '@faker-js/faker';
import { customAlphabet } from 'nanoid';
import { date } from '@/utilities/date';
import { generateMany } from '@/utilities/factory';
import { generateId } from '@/utilities/uid';

function generateCustomerNumber() {
  return customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 12)();
}

function generateDisplayName(fullName: string) {
  const name = fullName.split(' ');
  return `${name.at(0)} ${name.at(-1)}`;
}

export default generateMany(50, () => {
  const email = faker.internet.email().toLocaleLowerCase();
  const fullName = faker.person.fullName();

  return {
    email,
    id: generateId(),
    number: generateCustomerNumber(),
    fullName,
    displayName: generateDisplayName(fullName),
    phoneNumber: faker.helpers.fromRegExp('+24492[0-9]{7}'),
    avatarUrl: `https://i.pravatar.cc/300?u=${email}`,
    createdAt: date(faker.date.past()),
    updatedAt: date(faker.date.recent()),
    status: faker.helpers.arrayElement(['active', 'banned', 'archived']),
    rating: faker.number.float({ min: 1, max: 5 }),
  };
});
