import { type MantineThemeOverride, Tabs } from "@mantine/core";

import classNames from "./tabs.module.css";

export default {
  Tabs: Tabs.extend({
    classNames,
  }),
} as MantineThemeOverride["components"];
