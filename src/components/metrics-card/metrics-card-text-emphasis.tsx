import { type ElementProps, Text, type TextProps } from "@mantine/core";

export type MetricsCardTextEmphasisProps = ElementProps<"p", keyof TextProps> & Omit<TextProps, "fw" | "fz">;

export function MetricsCardTextEmphasis(props: MetricsCardTextEmphasisProps) {
  return <Text fw="bold" fz="lg" {...props} />;
}
