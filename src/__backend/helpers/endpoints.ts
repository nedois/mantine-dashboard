import { app } from '@/config';

export function apiUrl(path: string) {
  return new URL(path, app.apiBaseUrl).toString();
}
