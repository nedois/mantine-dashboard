import { date } from '@/utilities/date';

export const fakeNotifications = [
  {
    id: '1',
    type: 'network:request' as const,
    title: 'John Doe sent you a friend request',
    receivedAt: date().subtract(30, 'minutes'),
    sentBy: {
      id: '12313212',
      avatarUrl: 'https://i.pravatar.cc/150?u=john@example.com',
      displayName: 'John Doe',
    },
  },
  {
    id: '2',
    type: 'project:mention' as const,
    title: 'Marta Pauleta mentioned you in Mantine',
    receivedAt: date().subtract(1, 'hour'),
    sentBy: {
      id: '12313212',
      avatarUrl: 'https://i.pravatar.cc/150?u=marta@example.com',
      displayName: 'Marta Pauleta',
    },
  },
];
