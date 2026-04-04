import { type MantineThemeOverride, Tooltip } from "@mantine/core";

export default {
  Tooltip: Tooltip.extend({
    defaultProps: {
      withArrow: true,
    },
  }),
} as MantineThemeOverride["components"];
