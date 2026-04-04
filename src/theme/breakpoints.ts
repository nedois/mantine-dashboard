import type { DefaultMantineSize } from "@mantine/core";

const theme = {
  breakpoints: {
    "2xl": "96em",
    "3xl": "120em",
    "4xl": "160em",
    "lg": "64em",
    "md": "48em",
    "sm": "40em",
    "xl": "80em",
    "xs": "30em",
  },
} as const;

type ExtendedBreakpoints = DefaultMantineSize | keyof typeof theme.breakpoints;

declare module "@mantine/core" {
  export interface MantineThemeSizesOverride {
    breakpoints: Record<ExtendedBreakpoints, string>;
  }
}

export default theme;
