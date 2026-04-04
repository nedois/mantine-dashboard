import { type MantineThemeOverride, NavLink } from "@mantine/core";

import classNames from "./nav-link.module.css";

export default {
  NavLink: NavLink.extend({ classNames }),
} as MantineThemeOverride["components"];
