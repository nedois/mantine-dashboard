import type { Collection } from "@msw/data";
import type { DefaultBodyType, StrictRequest } from "msw";
import type { ZodType } from "zod";

export function paginate<R extends DefaultBodyType, S extends ZodType>(
  request: StrictRequest<R>,
  collection: Collection<S>,
  predicate?: Parameters<typeof collection.findMany>[0]
) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page"));
  const perPage = Number(url.searchParams.get("perPage"));

  const sort = url.searchParams.get("sort");
  const direction = sort?.startsWith("-") ? "desc" : "asc";
  const orderBy = sort ? (direction === "desc" ? { [sort.slice(1)]: "desc" } : { [sort]: "asc" }) : undefined;

  const total = collection.count();
  const lastPage = Math.ceil(total / perPage);
  const data = collection.findMany(predicate, {
    take: perPage,
    skip: (page - 1) * perPage,
    orderBy: orderBy as any,
  });

  const metadata = {
    total,
    perPage,
    currentPage: page,
    lastPage,
    firstPage: 1,
    firstPageUrl: `${url.origin}${url.pathname}?page=1&perPage=${perPage}`,
    lastPageUrl: `${url.origin}${url.pathname}?page=${lastPage}&perPage=${perPage}`,
    nextPageUrl: `${url.origin}${url.pathname}?page=${Math.min(page + 1, lastPage)}&perPage=${perPage}`,
    previousPageUrl: `${url.origin}${url.pathname}?page=${Math.max(page - 1, 1)}&perPage=${perPage}`,
  };

  return { metadata, data };
}
