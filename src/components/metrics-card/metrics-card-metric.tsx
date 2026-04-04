import { Title, type TitleProps } from "@mantine/core";

export type MetricsCardMetricProps = TitleProps;

export function MetricsCardMetric(props: MetricsCardMetricProps) {
  return <Title component="span" size="h4" {...props} />;
}
