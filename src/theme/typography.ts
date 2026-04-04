import { type DefaultMantineSize, rem } from "@mantine/core";

const theme = {
  fontFamily: "Inter, system-ui, sans-serif",
  fontSmoothing: true,
  fontSizes: {
    // Base
    "xs": rem("12px"),
    "sm": rem("14px"),
    "md": rem("16px"),
    "lg": rem("18px"),
    "xl": rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),

    // Responsive (fluid)
    "rxs": "clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem)",
    "rsm": "clamp(0.875rem, 0.8rem + 0.3vw, 1rem)",
    "rmd": "clamp(1rem, 0.9rem + 0.4vw, 1.125rem)",
    "rlg": "clamp(1.125rem, 1rem + 0.5vw, 1.25rem)",
    "rxl": "clamp(1.25rem, 1.05rem + 0.8vw, 1.5rem)",
    "r2xl": "clamp(1.5rem, 1.2rem + 1.2vw, 1.875rem)",
    "r3xl": "clamp(1.875rem, 1.4rem + 1.8vw, 2.25rem)",
    "r4xl": "clamp(2.25rem, 1.6rem + 2.5vw, 3rem)",
    "r5xl": "clamp(3rem, 2rem + 4vw, 3.75rem)",
  },

  lineHeights: {
    // Base
    "xs": 1.5,
    "sm": 1.5,
    "md": 1.5,
    "lg": 1.45,
    "xl": 1.4,
    "2xl": 1.35,
    "3xl": 1.3,
    "4xl": 1.25,
    "5xl": 1.2,

    // Responsive (fluid)
    "rxs": "clamp(1.45, 1.4 + 0.05vw, 1.5)",
    "rsm": "clamp(1.5, 1.45 + 0.05vw, 1.55)",
    "rmd": "clamp(1.5, 1.45 + 0.05vw, 1.6)",
    "rlg": "clamp(1.45, 1.4 + 0.05vw, 1.5)",
    "rxl": "clamp(1.4, 1.35 + 0.05vw, 1.45)",
    "r2xl": "clamp(1.35, 1.3 + 0.05vw, 1.4)",
    "r3xl": "clamp(1.3, 1.25 + 0.05vw, 1.35)",
    "r4xl": "clamp(1.25, 1.2 + 0.05vw, 1.3)",
    "r5xl": "clamp(1.2, 1.15 + 0.05vw, 1.25)",
  },

  headings: {
    fontFamily: "Geist, system-ui, sans-serif",
    sizes: {
      h1: {
        fontSize: "clamp(1.875rem, 1.2rem + 2.5vw, 3.375rem)",
        fontWeight: "700",
        lineHeight: "clamp(1.1, 1.05 + 0.2vw, 1.2)",
      },
      h2: {
        fontSize: "clamp(1.5rem, 1.1rem + 2vw, 2.5rem)",
        fontWeight: "700",
        lineHeight: "1.2",
      },
      h3: {
        fontSize: "clamp(1.25rem, 1rem + 1.5vw, 2rem)",
        fontWeight: "600",
        lineHeight: "1.25",
      },
      h4: {
        fontSize: "clamp(1.125rem, 1rem + 0.8vw, 1.5rem)",
        fontWeight: "600",
        lineHeight: "1.3",
      },
      h5: {
        fontSize: "clamp(1rem, 0.95rem + 0.4vw, 1.125rem)",
        fontWeight: "500",
        lineHeight: "1.3",
      },
      h6: {
        fontSize: "clamp(0.875rem, 0.85rem + 0.3vw, 1rem)",
        fontWeight: "500",
        lineHeight: "1.3",
      },
    },
  },
} as const;

type ExtendedFontSizes = DefaultMantineSize | keyof typeof theme.fontSizes;
type ExtendedLineHeights = DefaultMantineSize | keyof typeof theme.lineHeights;

declare module "@mantine/core" {
  export interface MantineThemeSizesOverride {
    fontSizes: Record<ExtendedFontSizes, string>;
    lineHeights: Record<ExtendedLineHeights, string>;
  }
}

export default theme;
