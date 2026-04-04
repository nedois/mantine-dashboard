import { Anchor, type MantineThemeOverride } from "@mantine/core";

import classNames from "./anchor.module.css";

export default {
  Anchor: Anchor.extend({
    classNames,
    defaultProps: {
      underline: "never",
    },
  }),
} as MantineThemeOverride["components"];
