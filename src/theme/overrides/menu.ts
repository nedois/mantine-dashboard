import { type MantineThemeOverride, Menu } from "@mantine/core";

export default {
  Menu: Menu.extend({
    defaultProps: {
      shadow: "md",
      transitionProps: {
        duration: 200,
        transition: "scale",
      },
      withArrow: true,
    },
  }),
} as MantineThemeOverride["components"];
