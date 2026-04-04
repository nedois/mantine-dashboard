import { Card, type CardSectionProps, Group, Text, ThemeIcon, Title } from "@mantine/core";
import type { ReactNode } from "react";

import { Icon } from "./icon";

export interface CardHeaderProps extends Omit<CardSectionProps, "c" | "fw" | "size" | "tt"> {
  children?: ReactNode;
  description?: ReactNode;
  icon?: number | string;
  title?: ReactNode;
}

export function CardHeader({ children, description, icon, title, withBorder = true, ...props }: CardHeaderProps) {
  return (
    <Card.Section inheritPadding py="md" withBorder={withBorder} {...props}>
      <Group justify="space-between">
        <Group gap="xs">
          {icon && (
            <ThemeIcon fz="sm" radius={typeof icon === "number" ? "xl" : "xs"} size="md">
              {typeof icon === "number" ? icon : <Icon fz="md" icon={icon} />}
            </ThemeIcon>
          )}
          <div>
            {title && <Title order={6}>{title}</Title>}
            {description && (
              <Text c="dimmed" size="sm" style={{ textWrap: "pretty" }}>
                {description}
              </Text>
            )}
          </div>
        </Group>
        <div style={{ flexShrink: 0 }}>{children}</div>
      </Group>
    </Card.Section>
  );
}
