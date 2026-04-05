import { env } from "#/config";

export function apiUrl(path: string) {
  return new URL(path, env.VITE_API_BASE_URL).toString();
}
