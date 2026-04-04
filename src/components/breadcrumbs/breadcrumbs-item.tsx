import { Anchor, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export interface BreadcrumbItemProps {
  label: string;
  to?: string;
}

export function BreadcrumbsItem({ label, to }: BreadcrumbItemProps) {
  if (to) {
    return (
      <Anchor c="inherit" component={Link} fz="sm" to={to} underline="never">
        {label}
      </Anchor>
    );
  }

  return (
    <Text c="dimmed" fz="sm" key={label}>
      {label}
    </Text>
  );
}
