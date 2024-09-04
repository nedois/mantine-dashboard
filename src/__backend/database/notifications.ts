import { date } from '@/utilities/date';
import { generateId } from '@/utilities/uid';

export default [
  {
    id: generateId(),
    type: 'network:request',
    title: 'John Doe sent you a friend request',
    receivedAt: date().subtract(30, 'minutes'),
    sentBy: {
      id: '12313212',
      avatarUrl: 'https://i.pravatar.cc/150?u=john@example.com',
      displayName: 'John Doe',
    },
  },
  {
    id: generateId(),
    type: 'project:mention',
    title: 'Marta Pauleta mentioned you in Mantine',
    receivedAt: date().subtract(1, 'hour'),
    sentBy: {
      id: '12313212',
      avatarUrl: 'https://i.pravatar.cc/150?u=marta@example.com',
      displayName: 'Marta Pauleta',
    },
  },
];
