import { DrawerOverlay, type MantineThemeOverride } from "@mantine/core";

export default {
  DrawerOverlay: DrawerOverlay.extend({
    defaultProps: {
      backgroundOpacity: 0.5,
      blur: 2,
    },
  }),
} as MantineThemeOverride["components"];
