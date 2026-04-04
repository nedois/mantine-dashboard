import { Card, type CardProps } from "@mantine/core";

import { MetricsCardMetric } from "./metrics-card-metric";
import { MetricsCardText } from "./metrics-card-text";
import { MetricsCardTextDimmed } from "./metrics-card-text-dimmed";
import { MetricsCardTextEmphasis } from "./metrics-card-text-emphasis";
import { MetricsCardTrendBadge } from "./metrics-card-trend-badge";

export type MetricsCardProps = CardProps;

export function MetricsCardRoot(props: MetricsCardProps) {
  return <Card {...props} />;
}

export const MetricsCard = Object.assign(MetricsCardRoot, {
  Text: MetricsCardText,
  TextEmphasis: MetricsCardTextEmphasis,
  TextDimmed: MetricsCardTextDimmed,
  Metric: MetricsCardMetric,
  TrendBadge: MetricsCardTrendBadge,
});
