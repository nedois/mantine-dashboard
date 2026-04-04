import { ActionIcon, AppShell, Overlay, RemoveScroll } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { FC, ReactNode } from "react";

import { Icon } from "#/components/icon";
import { useSmallerThan } from "#/hooks/use-smaller-than";

import classes from "./dashboard-app-shell.module.css";

export interface DashboardAppShellProps {
  children: ReactNode;
  header: FC<DashboardSidebarProps>;
  sidebar: FC<DashboardSidebarProps>;
}

export interface DashboardSidebarProps {
  closeNavbar?: () => void;
  openNavbar?: () => void;
  sidebarOpened?: boolean;
  toggleNavbar?: () => void;
}

export function DashboardAppShell({ children, header: Header, sidebar: Sidebar }: DashboardAppShellProps) {
  const [opened, { close, open, toggle }] = useDisclosure(true);
  const smallerThanMd = useSmallerThan("md");

  const showMenuOverlay = smallerThanMd && opened;

  return (
    <RemoveScroll enabled={showMenuOverlay}>
      <AppShell
        header={{ height: "4rem" }}
        layout="alt"
        navbar={{
          breakpoint: "sm",
          collapsed: { desktop: !opened, mobile: !opened },
          width: 280,
        }}
        padding="md"
      >
        <AppShell.Header className={classes.header}>
          <ActionIcon color="text" onClick={toggle} variant="subtle">
            <Icon fz="xl" icon="ri:menu-4-line" />
          </ActionIcon>
          <Header closeNavbar={close} openNavbar={open} sidebarOpened={opened} toggleNavbar={toggle} />
        </AppShell.Header>
        <AppShell.Navbar className={classes.navbar}>
          <Sidebar closeNavbar={close} openNavbar={open} sidebarOpened={opened} toggleNavbar={toggle} />
        </AppShell.Navbar>
        <AppShell.Main className={classes.main}>{children}</AppShell.Main>
        <Overlay className={classes.overlay} display={showMenuOverlay ? "inherit" : "none"} onClick={close} />
      </AppShell>
    </RemoveScroll>
  );
}
