import { type MantineThemeOverride, Popover } from "@mantine/core";

export default {
  Popover: Popover.extend({
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
