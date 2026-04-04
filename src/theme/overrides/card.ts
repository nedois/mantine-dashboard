import { Card, type MantineThemeOverride } from "@mantine/core";

export default {
  Card: Card.extend({
    defaultProps: {
      withBorder: true,
    },
  }),
} as MantineThemeOverride["components"];

declare module "@mantine/core" {
  export interface CardProps {
    variant?: PaperProps["variant"];
  }
}
