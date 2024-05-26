import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(
  http.get('https://example.com/user', () =>
    HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    })
  )
);
