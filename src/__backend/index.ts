// This is a fake backend, don't use it in production
export async function enableFakeBackend() {
  const { worker } = await import("./handlers");

  await worker.start({ onUnhandledRequest: "bypass" });
}
