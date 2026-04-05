import "./global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { enableFakeBackend } from "./__backend";
import { Providers } from "./providers";
import { Router } from "./router";

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

enableFakeBackend().then(() => {
  createRoot(rootElement).render(
    <StrictMode>
      <Providers>
        <Router />
      </Providers>
    </StrictMode>
  );
});
