import { type MantineThemeOverride, Modal } from "@mantine/core";

export default {
  Modal: Modal.extend({
    defaultProps: {
      centered: true,
    },
  }),
} as MantineThemeOverride["components"];
