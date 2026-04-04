import { type MantineThemeOverride, Title } from "@mantine/core";

import classNames from "./title.module.css";

export default {
  Title: Title.extend({ classNames }),
} as MantineThemeOverride["components"];
