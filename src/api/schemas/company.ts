import { z } from "zod";

export const CompanySchema = z.object({
  id: z.uuid(),
  name: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  isActive: z.boolean(),
});

export type Company = z.infer<typeof CompanySchema>;
