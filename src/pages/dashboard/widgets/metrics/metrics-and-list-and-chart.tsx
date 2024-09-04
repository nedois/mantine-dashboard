import { PiBankDuotone, PiFileTextDuotone, PiGiftDuotone, PiPulseDuotone } from 'react-icons/pi';
import { alpha, Button, Group, SimpleGrid, Stack } from '@mantine/core';
import { MetricCard } from '@/components/metric-card';
import { formatCurrency } from '@/utilities/number';

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
    title: 'Customer',
    description: '67% acquired this week',
    revenue: 27800,
    profit: 30052,
    invoices: 78962,
    expense: 27707,
  },
  {
    title: 'Sales',
    description: '30% acquired this week',
    revenue: 27800,
    profit: 30052,
    invoices: 78962,
    expense: 27707,
  },
  {
    title: 'Inventory',
    description: '10% acquired this week',
    revenue: 27800,
    profit: 30052,
    invoices: 78962,
    expense: 27707,
  },
  {
    title: 'Profit',
    description: '92% acquired this week',
    revenue: 27800,
    profit: 30052,
    invoices: 78962,
    expense: 27707,
  },
];

export function MetricsAndListAndChart() {
  return metrics.map(({ title, description, revenue, profit, invoices, expense }) => (
    <MetricCard.Root>
      <Stack gap="xl">
        <Group justify="space-between" align="flex-start">
          <div>
            <MetricCard.TextEmphasis>{title}</MetricCard.TextEmphasis>
            <MetricCard.TextMuted>{description}</MetricCard.TextMuted>
          </div>
          <Button variant="subtle" size="compact-sm">
            View all
          </Button>
        </Group>

        <SimpleGrid cols={2}>
          <Group gap="xs">
            <MetricCard.Icon bg={alpha('var(--mantine-color-red-1)', 0.6)} w="2.50rem" h="2.50rem">
              <PiBankDuotone size="60%" color="var(--mantine-color-red-9" />
            </MetricCard.Icon>
            <div>
              <MetricCard.TextMuted>Revenue</MetricCard.TextMuted>
              <MetricCard.TextEmphasis>{formatCurrency(revenue)}</MetricCard.TextEmphasis>
            </div>
          </Group>
          <Group gap="xs">
            <MetricCard.Icon bg={alpha('var(--mantine-color-teal-1)', 0.6)} w="2.50rem" h="2.50rem">
              <PiGiftDuotone size="60%" color="var(--mantine-color-teal-9" />
            </MetricCard.Icon>
            <div>
              <MetricCard.TextMuted>Profit</MetricCard.TextMuted>
              <MetricCard.TextEmphasis>{formatCurrency(profit)}</MetricCard.TextEmphasis>
            </div>
          </Group>
          <Group gap="xs">
            <MetricCard.Icon
              bg={alpha('var(--mantine-color-indigo-1)', 0.6)}
              w="2.50rem"
              h="2.50rem"
            >
              <PiFileTextDuotone size="60%" color="var(--mantine-color-indigo-9" />
            </MetricCard.Icon>
            <div>
              <MetricCard.TextMuted>Invoices</MetricCard.TextMuted>
              <MetricCard.TextEmphasis>{formatCurrency(invoices)}</MetricCard.TextEmphasis>
            </div>
          </Group>
          <Group gap="xs">
            <MetricCard.Icon
              bg={alpha('var(--mantine-color-orange-1)', 0.6)}
              w="2.50rem"
              h="2.50rem"
            >
              <PiPulseDuotone size="60%" color="var(--mantine-color-orange-9" />
            </MetricCard.Icon>
            <div>
              <MetricCard.TextMuted>Expense</MetricCard.TextMuted>
              <MetricCard.TextEmphasis>{formatCurrency(expense)}</MetricCard.TextEmphasis>
            </div>
          </Group>
        </SimpleGrid>

        <MetricCard.BarChart
          h={140}
          tickLine="none"
          gridAxis="none"
          dataKey="month"
          withYAxis={false}
          series={[
            { name: 'watches', color: 'red.6' },
            { name: 'smartphones', color: 'teal.6' },
            { name: 'laptops', color: 'indigo.6' },
            { name: 'tablets', color: 'orange.6' },
          ]}
          data={data}
        />
      </Stack>
    </MetricCard.Root>
  ));
}
