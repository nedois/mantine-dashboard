import { type MantineThemeOverride, ThemeIcon } from "@mantine/core";

export default {
  ThemeIcon: ThemeIcon.extend({
    defaultProps: {
      variant: "light",
    },
  }),
} as MantineThemeOverride["components"];
