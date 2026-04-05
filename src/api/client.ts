import ky from "ky";

import { env } from "#/config";

export const client = ky.extend({
  prefixUrl: env.VITE_API_BASE_URL,
});
