import { ActionIcon, Menu } from "@mantine/core";
import { Link } from "@tanstack/react-router";

import { Icon } from "#/components/icon";

import type { BreadcrumbItemProps } from "./breadcrumbs-item";

export interface BreadcrumbsMenuProps {
  items: Array<BreadcrumbItemProps>;
}

export function BreadcrumbsMenu({ items }: BreadcrumbsMenuProps) {
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon c="inherit" variant="subtle">
          <Icon height="100%" icon="ph:dots-three" />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {items.map((item) => (
          <Menu.Item component={Link} key={item.label} to={item.to ?? "#"}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
