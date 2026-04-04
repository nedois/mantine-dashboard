import { Checkbox, Group, type CheckboxCardProps as MantineCheckboxCardProps, Text } from "@mantine/core";
import clsx from "clsx";
import type { ReactNode } from "react";

import classes from "./checkbox-card.module.css";

export interface CheckboxCardProps extends Omit<MantineCheckboxCardProps, "children"> {
  description?: string;
  indicator?: ReactNode;
  label: ReactNode;
}

export function CheckboxCard({ className, description, indicator, label, ...props }: CheckboxCardProps) {
  return (
    <Checkbox.Card className={clsx(classes.root, className)} {...props}>
      <Group align="center" gap="xs" wrap="nowrap">
        {indicator || <Checkbox.Indicator />}
        <div>
          <Text className={classes.label}>{label}</Text>
          {description && <Text className={classes.description}>{description}</Text>}
        </div>
      </Group>
    </Checkbox.Card>
  );
}
