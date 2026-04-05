import { z } from "zod";

export const PaginationRequestSchema = z.object({
  page: z.int().positive().optional(),
  perPage: z.int().positive().optional(),
  sort: z.string().optional(),
});

export type PaginationRequest = z.infer<typeof PaginationRequestSchema>;

export const PaginationMetadataSchema = z.object({
  currentPage: z.int().positive(),
  firstPageUrl: z.string(),
  lastPage: z.int().positive(),
  lastPageUrl: z.string(),
  nextPageUrl: z.string().nullable(),
  perPage: z.int().positive(),
  previousPageUrl: z.string().nullable(),
  total: z.int().positive(),
});

export type PaginationMeta = z.infer<typeof PaginationMetadataSchema>;

export function pagedResponseSchema<T extends z.ZodType>(
  resourceSchema: T
): z.ZodObject<{
  data: z.ZodArray<T>;
  metadata: typeof PaginationMetadataSchema;
}> {
  return z.object({
    data: resourceSchema.array(),
    metadata: PaginationMetadataSchema,
  });
}

export type PagedResponse<T extends z.ZodType> = z.infer<ReturnType<typeof pagedResponseSchema<T>>>;
