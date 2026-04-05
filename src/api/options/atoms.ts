import { queryOptions } from "@tanstack/react-query";

import { client } from "#/api/client";
import { AtomSchema } from "#/api/schemas";

export function getAtomsQueryOptions() {
  return queryOptions({
    queryKey: ["atoms"],
    queryFn: () => client.get("atoms").json(),
    select: (data) => AtomSchema.array().parse(data),
  });
}
