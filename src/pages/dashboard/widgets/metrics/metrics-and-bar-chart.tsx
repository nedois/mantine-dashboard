import { Group } from '@mantine/core';
import { MetricCard } from '@/components/metric-card';
import { formatDecimal } from '@/utilities/number';

const data = [
  { month: 'January', smartphones: 1200, laptops: 900, tablets: 200, watches: 85 },
  { month: 'February', smartphones: 1900, laptops: 1200, tablets: 400, watches: 96 },
  { month: 'March', smartphones: 400, laptops: 1000, tablets: 200, watches: 75 },
  { month: 'April', smartphones: 1000, laptops: 200, tablets: 800, watches: 41 },
  { month: 'May', smartphones: 800, laptops: 1400, tablets: 1200, watches: 85 },
  { month: 'June', smartphones: 750, laptops: 600, tablets: 1000, watches: 120 },
];

const metrics = [
  {
    id: 'smartphones',
    title: 'Smartphone sells',
    description: 'Number of smartphones selled this year.',
    value: 1.4,
    color: 'blue.6',
    trend: 14.44,
    percentage: 54,
  },
  {
    id: 'laptops',
    description: 'Number of laptops selled this year.',
    title: 'Laptop sells',
    value: 92.6,
    color: 'var(--mantine-color-teal-6)',
    trend: -18.45,
    percentage: 48,
  },
  {
    id: 'tablets',
    description: 'Number of tablets selled this year.',
    title: 'Tablet sells',
    value: 92.6,
    color: 'var(--mantine-color-orange-6)',
    trend: 20.34,
    percentage: 80.3,
  },
  {
    id: 'watches',
    description: 'Number of watches selled this year.',
    title: 'Watches sells',
    value: 1.3,
    color: 'var(--mantine-color-red-6)',
    trend: 14.44,
    percentage: 54,
  },
];

export function MetricsAndBarChart() {
  return metrics.map(({ id, title, value, description, color, trend, percentage }) => (
    <MetricCard.Root key={id}>
      <Group justify="space-between" wrap="nowrap">
        <div>
          <MetricCard.TextMuted>{title}</MetricCard.TextMuted>
          <MetricCard.TextEmphasis mb="sm">
            {formatDecimal(value, { suffix: ' M', precision: 1 })}
          </MetricCard.TextEmphasis>
          <MetricCard.TextMuted>{description}</MetricCard.TextMuted>
        </div>

        <MetricCard.BarChart
          h="100%"
          w={72}
          tickLine="none"
          gridAxis="none"
          dataKey="month"
          withXAxis={false}
          withYAxis={false}
          withTooltip={false}
          barProps={{ barSize: 8, radius: 8 }}
          series={[{ name: id, color }]}
          data={data}
        />
      </Group>
    </MetricCard.Root>
  ));
}
