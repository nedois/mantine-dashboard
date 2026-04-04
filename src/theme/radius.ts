import { type DefaultMantineColor, rem } from "@mantine/core";

const theme = {
  defaultRadius: "sm",
  radius: {
    lg: rem("16px"),
    md: rem("12px"),
    sm: rem("8px"),
    xl: rem("24px"),
    xs: rem("6px"),
  },
} as const;

type ExtendedRadius = DefaultMantineColor | keyof typeof theme.radius;

declare module "@mantine/core" {
  export interface MantineThemeSizesOverride {
    radius: Record<ExtendedRadius, string>;
  }
}

export default theme;
