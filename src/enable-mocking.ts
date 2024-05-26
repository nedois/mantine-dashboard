import { app } from '@/config';

export async function enableMocking() {
  if (!app.enableMocking) {
    return;
  }

  const { worker } = await import('@/services/mocks');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  await worker.start();
}
