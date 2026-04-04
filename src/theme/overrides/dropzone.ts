import type { MantineThemeOverride } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";

import classNames from "./dropzone.module.css";

export default {
  Dropzone: Dropzone.extend({
    classNames,
  }),
} as MantineThemeOverride["components"];
