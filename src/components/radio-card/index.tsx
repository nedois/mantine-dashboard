import { Group, type RadioCardProps as MantineRadioCardProps, Radio, Text } from "@mantine/core";
import clsx from "clsx";
import type { ReactNode } from "react";

import classes from "./radio-card.module.css";

export interface RadioCardProps extends Omit<MantineRadioCardProps, "children"> {
  description?: string;
  indicator?: ReactNode;
  label: ReactNode;
}

export function RadioCard({ className, description, indicator, label, ...props }: RadioCardProps) {
  return (
    <Radio.Card className={clsx(classes.root, className)} {...props}>
      <Group align="center" gap="xs" wrap="nowrap">
        {indicator || <Radio.Indicator />}
        <div>
          <Text className={classes.label}>{label}</Text>
          {description && <Text className={classes.description}>{description}</Text>}
        </div>
      </Group>
    </Radio.Card>
  );
}
