import { type ElementProps, Text, type TextProps } from "@mantine/core";

export type MetricsCardTextDimmedProps = ElementProps<"p", keyof TextProps> & Omit<TextProps, "c" | "fz">;

export function MetricsCardTextDimmed(props: MetricsCardTextDimmedProps) {
  return <Text c="dimmed" fz="sm" {...props} />;
}
