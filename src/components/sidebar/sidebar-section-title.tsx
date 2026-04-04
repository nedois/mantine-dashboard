import { Text, type TextProps } from "@mantine/core";
import type { ReactNode } from "react";

import classes from "./sidebar-section-title.module.css";

export type SidebarSectionTitleProps = TextProps & {
  children: ReactNode;
};

export function SidebarSectionTitle(props: SidebarSectionTitleProps) {
  return <Text c="dimmed" className={classes.title} fw="inherit" fz="sm" pl="md" {...props} />;
}
