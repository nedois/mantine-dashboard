import { type ReactNode } from "react";

import { Devtools } from "#/components/devtools";

import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
      <Devtools />
    </QueryProvider>
  );
}
