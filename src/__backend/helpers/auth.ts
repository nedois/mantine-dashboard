import { DefaultBodyType, HttpResponse, StrictRequest } from 'msw';

export function isAuthenticated<R extends DefaultBodyType>(request: StrictRequest<R>) {
  const accessToken = request.headers.get('authorization');

  if (!accessToken || accessToken.split(' ').length !== 2) {
    throw HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
}
