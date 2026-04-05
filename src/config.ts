import { z } from "zod";

export const env = z
  .object({
    VITE_APP_NAME: z.string().default("MantiDash"),
    VITE_APP_VERSION: z.string().default("v2.0.0"),
    VITE_API_BASE_URL: z.string().default("http://localhost:3000"),
  })
  .parse(import.meta.env);

export const config = {};
