import { Text, type TextProps } from "@mantine/core";
import type { ReactNode } from "react";

export interface MetricsCardTextProps extends TextProps {
  children?: ReactNode;
}

export function MetricsCardText(props: MetricsCardTextProps) {
  return <Text c="dimmed" fz="sm" {...props} />;
}
