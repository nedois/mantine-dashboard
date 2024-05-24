import { alpha, Button, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import {
  PiGitCommitDuotone,
  PiGitForkDuotone,
  PiGitPullRequestDuotone,
  PiStarDuotone,
  PiBankDuotone,
  PiGiftDuotone,
  PiFileTextDuotone,
  PiPulseDuotone,
} from 'react-icons/pi';

import { Page } from '@/components/page';
import { PageHeader } from '@/components/page-header';
import { routes } from '@/routes/paths';
import { MetricCard } from '@/components/metric-card';
import { formatCurrency, formatDecimal, formatInt, formatPercentage } from '@/utilities/number';

const breadcrumbs = [
  { name: 'Dashboard', href: '/' },
  { name: 'Widgets', href: routes.widgets.root },
  { name: 'Metrics' },
];

const barData = [
  { month: 'January', smartphones: 1200, laptops: 900, tablets: 200, watches: 85 },
  { month: 'February', smartphones: 1900, laptops: 1200, tablets: 400, watches: 96 },
  { month: 'March', smartphones: 400, laptops: 1000, tablets: 200, watches: 75 },
  { month: 'April', smartphones: 1000, laptops: 200, tablets: 800, watches: 41 },
  { month: 'May', smartphones: 800, laptops: 1400, tablets: 1200, watches: 85 },
  { month: 'June', smartphones: 750, laptops: 600, tablets: 1000, watches: 120 },
];

export default function MetricsWidgets() {
  return (
    <Page title="Metrics widgets">
      <PageHeader title="Metrics" breadcrumbs={breadcrumbs} />

      <Stack gap="sm" mb="xl">
        <Text>Metrics + Icon</Text>
        <SimpleGrid cols={{ base: 1, sm: 2, xl: 3, '2xl': 4 }}>
          <MetricCard.Root>
            <Group>
              <MetricCard.Icon>
                <PiStarDuotone size="2rem" />
              </MetricCard.Icon>
              <div>
                <MetricCard.TextMuted>Repository stars</MetricCard.TextMuted>
                <MetricCard.TextEmphasis>{formatInt(44012)}</MetricCard.TextEmphasis>
              </div>
            </Group>
          </MetricCard.Root>

          <MetricCard.Root>
            <Group>
              <MetricCard.Icon>
                <PiGitCommitDuotone size="2rem" />
              </MetricCard.Icon>
              <div>
                <MetricCard.TextMuted>Commits</MetricCard.TextMuted>
                <MetricCard.TextEmphasis>{formatInt(20450)}</MetricCard.TextEmphasis>
              </div>
            </Group>
          </MetricCard.Root>

          <MetricCard.Root>
            <Group>
              <MetricCard.Icon>
                <PiGitForkDuotone size="2rem" />
              </MetricCard.Icon>
              <div>
                <MetricCard.TextMuted>Forks</MetricCard.TextMuted>
                <MetricCard.TextEmphasis>{formatInt(12450)}</MetricCard.TextEmphasis>
              </div>
            </Group>
          </MetricCard.Root>

          <MetricCard.Root>
            <Group>
              <MetricCard.Icon>
                <PiGitPullRequestDuotone size="2rem" />
              </MetricCard.Icon>
              <div>
                <MetricCard.TextMuted>Pull Requests</MetricCard.TextMuted>
                <MetricCard.TextEmphasis>{formatInt(142)}</MetricCard.TextEmphasis>
              </div>
            </Group>
          </MetricCard.Root>
        </SimpleGrid>
      </Stack>

      <Stack gap="sm" mb="xl">
        <Text>Metrics + ProgressBar</Text>
        <SimpleGrid cols={{ base: 1, sm: 2, xl: 3, '2xl': 4 }}>
          <MetricCard.Root>
            <Group justify="space-between">
              <div>
                <MetricCard.TextMuted>Total images</MetricCard.TextMuted>
                <MetricCard.TextEmphasis mb="sm">
                  {formatInt(44012, { suffix: ' GB' })}
                </MetricCard.TextEmphasis>
                <MetricCard.TextTrend value={32.4}>last month</MetricCard.TextTrend>
              </div>

              <MetricCard.RingProgress
                size={92}
                label={formatPercentage(32.4, { precision: 0 })}
                sections={[{ value: 32.4, color: 'var(--mantine-color-teal-6)' }]}
              />
            </Group>
          </MetricCard.Root>

          <MetricCard.Root>
            <Group justify="space-between">
              <div>
                <MetricCard.TextMuted>Total videos</MetricCard.TextMuted>
                <MetricCard.TextEmphasis mb="sm">
                  {formatInt(440612, { suffix: ' GB' })}
                </MetricCard.TextEmphasis>
                <MetricCard.TextTrend value={-18.45}>last month</MetricCard.TextTrend>
              </div>

              <MetricCard.RingProgress
                size={92}
                label={formatPercentage(18.45, { precision: 0 })}
                sections={[{ value: 48, color: 'var(--mantine-color-red-6)' }]}
              />
            </Group>
          </MetricCard.Root>

          <MetricCard.Root>
            <Group justify="space-between">
              <div>
                <MetricCard.TextMuted>Total Documents</MetricCard.TextMuted>
                <MetricCard.TextEmphasis mb="sm">
                  {formatInt(90875, { suffix: ' GB' })}
                </MetricCard.TextEmphasis>
                <MetricCard.TextTrend value={20.34}>last month</MetricCard.TextTrend>
              </div>

              <MetricCard.RingProgress
                size={92}
                label={formatPercentage(80.3, { precision: 0 })}
                sections={[{ value: 80.3, color: 'var(--mantine-color-orange-6)' }]}
              />
            </Group>
          </MetricCard.Root>

          <MetricCard.Root>
            <Group justify="space-between">
              <div>
                <MetricCard.TextMuted>Total videos</MetricCard.TextMuted>
                <MetricCard.TextEmphasis mb="sm">
                  {formatInt(63778, { suffix: ' GB' })}
                </MetricCard.TextEmphasis>
                <MetricCard.TextTrend value={14.44}>last month</MetricCard.TextTrend>
              </div>

              <MetricCard.RingProgress
                size={92}
                label={formatPercentage(54, { precision: 0 })}
                sections={[{ value: 54, color: 'var(--mantine-color-blue-6)' }]}
              />
            </Group>
          </MetricCard.Root>
        </SimpleGrid>
      </Stack>

      <Stack gap="sm" mb="xl">
        <Text>Metrics + BarChart</Text>
        <SimpleGrid cols={{ base: 1, sm: 2, xl: 3, '2xl': 4 }}>
          <MetricCard.Root>
            <Group justify="space-between" wrap="nowrap">
              <div>
                <MetricCard.TextMuted>Smartphone sells</MetricCard.TextMuted>
                <MetricCard.TextEmphasis mb="sm">
                  {formatDecimal(1.4, { suffix: ' M', precision: 1 })}
                </MetricCard.TextEmphasis>
                <MetricCard.TextMuted>Number of smartphones selled this year.</MetricCard.TextMuted>
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
                series={[{ name: 'smartphones', color: 'blue.6' }]}
                data={barData}
              />
            </Group>
          </MetricCard.Root>

          <MetricCard.Root>
            <Group justify="space-between" wrap="nowrap">
              <div>
                <MetricCard.TextMuted>Laptop sells</MetricCard.TextMuted>
                <MetricCard.TextEmphasis mb="sm">
                  {formatDecimal(92.6, { suffix: ' K', precision: 1 })}
                </MetricCard.TextEmphasis>
                <MetricCard.TextMuted>Number of laptops selled this year.</MetricCard.TextMuted>
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
                series={[{ name: 'laptops', color: 'teal.6' }]}
                data={barData}
              />
            </Group>
          </MetricCard.Root>

          <MetricCard.Root>
            <Group justify="space-between" wrap="nowrap">
              <div>
                <MetricCard.TextMuted>Tablet sells</MetricCard.TextMuted>
                <MetricCard.TextEmphasis mb="sm">
                  {formatDecimal(92.6, { suffix: ' K', precision: 1 })}
                </MetricCard.TextEmphasis>
                <MetricCard.TextMuted>Number of tablets selled this year.</MetricCard.TextMuted>
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
                series={[{ name: 'tablets', color: 'orange.6' }]}
                data={barData}
              />
            </Group>
          </MetricCard.Root>

          <MetricCard.Root>
            <Group justify="space-between" wrap="nowrap">
              <div>
                <MetricCard.TextMuted>Watches sells</MetricCard.TextMuted>
                <MetricCard.TextEmphasis mb="sm">
                  {formatDecimal(1.3, { suffix: ' K', precision: 1 })}
                </MetricCard.TextEmphasis>
                <MetricCard.TextMuted>Number of watches selled this year.</MetricCard.TextMuted>
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
                series={[{ name: 'watches', color: 'red.6' }]}
                data={barData}
              />
            </Group>
          </MetricCard.Root>
        </SimpleGrid>
      </Stack>

      <Stack gap="sm" mb="xl">
        <Text>Metrics + List + Chart</Text>
        <SimpleGrid cols={{ base: 1, sm: 2, xl: 3, '2xl': 4 }}>
          <MetricCard.Root>
            <Stack gap="xl">
              <Group justify="space-between" align="flex-start">
                <div>
                  <MetricCard.TextEmphasis>Customer</MetricCard.TextEmphasis>
                  <MetricCard.TextMuted>67% acquired this week</MetricCard.TextMuted>
                </div>
                <Button variant="subtle" size="compact-sm">
                  View all
                </Button>
              </Group>

              <SimpleGrid cols={2}>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-red-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiBankDuotone size="60%" color="var(--mantine-color-red-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Revenue</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(27800)}</MetricCard.TextEmphasis>
                  </div>
                </Group>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-teal-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiGiftDuotone size="60%" color="var(--mantine-color-teal-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Profit</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(30052)}</MetricCard.TextEmphasis>
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
                    <MetricCard.TextEmphasis>{formatCurrency(78962)}</MetricCard.TextEmphasis>
                  </div>
                </Group>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-orange-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiFileTextDuotone size="60%" color="var(--mantine-color-orange-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Expense</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(27707)}</MetricCard.TextEmphasis>
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
                data={barData}
              />
            </Stack>
          </MetricCard.Root>

          <MetricCard.Root>
            <Stack gap="xl">
              <Group justify="space-between" align="flex-start">
                <div>
                  <MetricCard.TextEmphasis>Sales</MetricCard.TextEmphasis>
                  <MetricCard.TextMuted>67% acquired this week</MetricCard.TextMuted>
                </div>
                <Button variant="subtle" size="compact-sm">
                  View all
                </Button>
              </Group>

              <SimpleGrid cols={2}>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-red-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiBankDuotone size="60%" color="var(--mantine-color-red-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Revenue</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(27800)}</MetricCard.TextEmphasis>
                  </div>
                </Group>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-teal-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiGiftDuotone size="60%" color="var(--mantine-color-teal-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Profit</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(30052)}</MetricCard.TextEmphasis>
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
                    <MetricCard.TextEmphasis>{formatCurrency(78962)}</MetricCard.TextEmphasis>
                  </div>
                </Group>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-orange-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiFileTextDuotone size="60%" color="var(--mantine-color-orange-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Expense</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(27707)}</MetricCard.TextEmphasis>
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
                data={barData}
              />
            </Stack>
          </MetricCard.Root>

          <MetricCard.Root>
            <Stack gap="xl">
              <Group justify="space-between" align="flex-start">
                <div>
                  <MetricCard.TextEmphasis>Inventory</MetricCard.TextEmphasis>
                  <MetricCard.TextMuted>67% acquired this week</MetricCard.TextMuted>
                </div>
                <Button variant="subtle" size="compact-sm">
                  View all
                </Button>
              </Group>

              <SimpleGrid cols={2}>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-red-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiBankDuotone size="60%" color="var(--mantine-color-red-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Revenue</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(27800)}</MetricCard.TextEmphasis>
                  </div>
                </Group>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-teal-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiGiftDuotone size="60%" color="var(--mantine-color-teal-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Profit</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(30052)}</MetricCard.TextEmphasis>
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
                    <MetricCard.TextEmphasis>{formatCurrency(78962)}</MetricCard.TextEmphasis>
                  </div>
                </Group>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-orange-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiFileTextDuotone size="60%" color="var(--mantine-color-orange-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Expense</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(27707)}</MetricCard.TextEmphasis>
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
                data={barData}
              />
            </Stack>
          </MetricCard.Root>

          <MetricCard.Root>
            <Stack gap="xl">
              <Group justify="space-between" align="flex-start">
                <div>
                  <MetricCard.TextEmphasis>Profit</MetricCard.TextEmphasis>
                  <MetricCard.TextMuted>67% acquired this week</MetricCard.TextMuted>
                </div>
                <Button variant="subtle" size="compact-sm">
                  View all
                </Button>
              </Group>

              <SimpleGrid cols={2}>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-red-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiBankDuotone size="60%" color="var(--mantine-color-red-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Revenue</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(27800)}</MetricCard.TextEmphasis>
                  </div>
                </Group>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-teal-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiGiftDuotone size="60%" color="var(--mantine-color-teal-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Profit</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(30052)}</MetricCard.TextEmphasis>
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
                    <MetricCard.TextEmphasis>{formatCurrency(78962)}</MetricCard.TextEmphasis>
                  </div>
                </Group>
                <Group gap="xs">
                  <MetricCard.Icon
                    bg={alpha('var(--mantine-color-orange-1)', 0.6)}
                    w="2.50rem"
                    h="2.50rem"
                  >
                    <PiFileTextDuotone size="60%" color="var(--mantine-color-orange-9" />
                  </MetricCard.Icon>
                  <div>
                    <MetricCard.TextMuted>Expense</MetricCard.TextMuted>
                    <MetricCard.TextEmphasis>{formatCurrency(27707)}</MetricCard.TextEmphasis>
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
                data={barData}
              />
            </Stack>
          </MetricCard.Root>
        </SimpleGrid>
      </Stack>
    </Page>
  );
}
