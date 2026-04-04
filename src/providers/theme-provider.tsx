import { MantineProvider, type MantineProviderProps } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";

import { cssVariableResolver, theme } from "#/theme";

export type ThemeProviderProps = Omit<MantineProviderProps, "cssVariableResolver" | "theme">;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <MantineProvider cssVariablesResolver={cssVariableResolver} theme={theme} {...props}>
      <Notifications position="bottom-center" />
      <NavigationProgress />
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
}
