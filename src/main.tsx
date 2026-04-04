import "./global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Providers } from "./providers";
import { Router } from "./router";

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
  <StrictMode>
    <Providers>
      <Router />
    </Providers>
  </StrictMode>
);
