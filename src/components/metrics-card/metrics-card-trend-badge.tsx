import { Badge, type BadgeProps } from "@mantine/core";

import { Icon } from "#/components/icon";

export interface MetricsCardTrendBadgeProps extends Omit<BadgeProps, "color"> {
  increasing: boolean;
}

const config = {
  decreasing: { color: "red", icon: "lucide:trending-down" },
  increasing: { color: "teal", icon: "lucide:trending-up" },
};

export function MetricsCardTrendBadge({ increasing, ...props }: MetricsCardTrendBadgeProps) {
  const { color, icon } = increasing ? config.increasing : config.decreasing;
  return (
    <Badge
      color={color}
      component="span"
      fw={600}
      leftSection={<Icon height="1rem" icon={icon} />}
      size="sm"
      variant="light"
      {...props}
    />
  );
}
