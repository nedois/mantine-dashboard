import { LoadingOverlay, type MantineThemeOverride } from "@mantine/core";

export default {
  LoadingOverlay: LoadingOverlay.extend({
    defaultProps: {
      loaderProps: {
        type: "bars",
      },
      overlayProps: {
        blur: 4,
      },
      zIndex: 1000,
    },
  }),
} as MantineThemeOverride["components"];
