import type { DefaultMantineSize } from "@mantine/core";

const theme = {
  defaultRadius: "sm",
  shadows: {
    "xs": "0 1px 2px rgba(0, 0, 0, 0.04)",
    "sm": "0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.03)",
    "md": "0 4px 8px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.04)",
    "lg": "0 10px 20px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.04)",
    "xl": "0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.05)",
    "2xl": "0 30px 60px rgba(0, 0, 0, 0.12), 0 12px 24px rgba(0, 0, 0, 0.06)",
  },
} as const;

type ExtendedShadows = DefaultMantineSize | keyof typeof theme.shadows;

declare module "@mantine/core" {
  export interface MantineThemeSizesOverride {
    shadows: Record<ExtendedShadows, string>;
  }
}

export default theme;
