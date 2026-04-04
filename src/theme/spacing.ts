import { type DefaultMantineSize, rem } from "@mantine/core";

const theme = {
  spacing: {
    "3xs": rem("4px"),
    "2xs": rem("6px"),
    "xs": rem("8px"),
    "sm": rem("12px"),
    "md": rem("16px"),
    "lg": rem("20px"),
    "xl": rem("24px"),
    "2xl": rem("32px"),
    "3xl": rem("48px"),
    "4xl": rem("64px"),
    "5xl": rem("80px"),
  } as const,
};

type ExtendedSpacing = DefaultMantineSize | keyof typeof theme.spacing;

declare module "@mantine/core" {
  export interface MantineThemeSizesOverride {
    spacing: Record<ExtendedSpacing, string>;
  }
}

export default theme;
