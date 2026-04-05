import { queryOptions } from "@tanstack/react-query";

import { client } from "#/api/client";
import { CompanySchema, type PaginationRequest, pagedResponseSchema } from "#/api/schemas";

export function getRichestCompaniesQueryOptions(request: PaginationRequest = {}) {
  return queryOptions({
    queryKey: ["companies", { ...request, category: "richest" }],
    queryFn: () => client.get("companies", { searchParams: request }).json(),
    select: (data) => pagedResponseSchema(CompanySchema).parse(data),
  });
}
