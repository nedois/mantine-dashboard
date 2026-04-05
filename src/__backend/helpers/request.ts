import { type DefaultBodyType, HttpResponse, type StrictRequest } from "msw";
import { z, type ZodObject, type ZodRawShape } from "zod";

export async function validateRequestUsing<R extends DefaultBodyType, D extends ZodRawShape>(
  request: StrictRequest<R>,
  schema: ZodObject<D>
) {
  const body = await request.json();

  const { data, error, success } = schema.safeParse(body);

  if (!success) {
    throw HttpResponse.json({ message: "Bad request", ...z.treeifyError(error) }, { status: 422 });
  }

  return data;
}
