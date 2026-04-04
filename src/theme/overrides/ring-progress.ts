import { type MantineThemeOverride, RingProgress } from "@mantine/core";

export default {
  RingProgress: RingProgress.extend({
    defaultProps: {
      roundCaps: true,
      thickness: 6,
    },
  }),
} as MantineThemeOverride["components"];
