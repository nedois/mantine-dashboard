import { DefaultBodyType, HttpResponse, StrictRequest } from 'msw';
import { ZodObject, ZodRawShape } from 'zod';

export async function validateRequestUsing<R extends DefaultBodyType, D extends ZodRawShape>(
  request: StrictRequest<R>,
  schema: ZodObject<D>
) {
  const body = await request.json();

  const { data, error, success } = schema.safeParse(body);

  if (!success) {
    throw HttpResponse.json({ message: 'Bad request', ...error.flatten() }, { status: 422 });
  }

  return data;
}
