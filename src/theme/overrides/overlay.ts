import { type MantineThemeOverride, Overlay } from "@mantine/core";

export default {
  Overlay: Overlay.extend({
    defaultProps: {
      blur: 1,
    },
  }),
} as MantineThemeOverride["components"];
