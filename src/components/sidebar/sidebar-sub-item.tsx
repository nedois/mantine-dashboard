import { NavLink, type NavLinkProps } from "@mantine/core";
import { Link, useLocation } from "@tanstack/react-router";
import classes from "./sidebar-sub-item.module.css";

export interface SidebarSubItemProps extends NavLinkProps {
  href: string;
  label: string;
  onNavigate?: (href: string) => void;
}

export function SidebarSubItem({ href, label, onNavigate, ...props }: SidebarSubItemProps) {
  const { pathname } = useLocation();

  return (
    <NavLink
      active={pathname.endsWith(href)}
      className={classes.item}
      component={Link}
      label={label}
      leftSection={<span className="dot" />}
      onClick={() => onNavigate?.(href)}
      to={href}
      {...props}
    />
  );
}
