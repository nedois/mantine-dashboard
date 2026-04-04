import { AppShell, type MantineThemeOverride } from "@mantine/core";

import classNames from "./app-shell.module.css";

export default {
  AppShell: AppShell.extend({
    classNames,
  }),
} as MantineThemeOverride["components"];
