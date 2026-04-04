import { type MantineThemeOverride, Pill } from "@mantine/core";

import classNames from "./pill.module.css";

export default {
  Pill: Pill.extend({
    classNames,
  }),
} as MantineThemeOverride["components"];
