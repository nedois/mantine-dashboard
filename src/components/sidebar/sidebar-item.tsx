import { NavLink, type NavLinkProps } from "@mantine/core";
import { Link, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SidebarSubItem, type SidebarSubItemProps } from "./sidebar-sub-item";

import classes from "./sidebar-item.module.css";

export interface SidebarItemProps extends NavLinkProps {
  badge?: ReactNode;
  href: string;
  icon: ReactNode;
  label: string;
  onNavigate?: (href: string) => void;
  subItems?: Array<SidebarSubItemProps>;
}

export function SidebarItem({ badge, href, icon, onNavigate, subItems, ...props }: SidebarItemProps) {
  const { pathname } = useLocation();

  if (subItems) {
    return (
      <NavLink
        active={pathname.endsWith(href)}
        childrenOffset={0}
        className={classes.item}
        leftSection={icon}
        rightSection={badge}
        {...props}
      >
        {subItems.map((item) => (
          <SidebarSubItem key={item.label} onNavigate={onNavigate} variant="subtle" {...item} />
        ))}
      </NavLink>
    );
  }

  return (
    <NavLink
      active={pathname.endsWith(href)}
      className={classes.item}
      component={Link}
      leftSection={icon}
      onClick={() => onNavigate?.(href)}
      rightSection={badge}
      to={href}
      {...props}
    />
  );
}
