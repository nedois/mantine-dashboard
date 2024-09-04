import { Notification } from '@/api/entities';
import { createGetQueryHook } from '@/api/helpers';

export const useGetNotifications = createGetQueryHook({
  endpoint: '/notifications',
  responseSchema: Notification.array(),
  rQueryParams: { queryKey: ['notifications'] },
});
