import { Group, SimpleGrid, Stack, Text } from '@mantine/core';
import {
  PiGitCommitDuotone,
  PiGitForkDuotone,
  PiGitPullRequestDuotone,
  PiStarDuotone,
} from 'react-icons/pi';

import { Page } from '@/components/page';
import { PageHeader } from '@/components/page-header';
import { routes } from '@/routes/paths';
import { MetricCard } from '@/components/metric-card';
import { formatInt, formatPercentage } from '@/utilities/number';

const breadcrumbs = [
  { name: 'Dashboard', href: '/' },
  { name: 'Widgets', href: routes.widgets.root },
  { name: 'Metrics' },
];

export default function MetricsWidgets() {
  return (
    <Page title="Metrics widgets">
      <PageHeader title="Metrics" breadcrumbs={breadcrumbs} mb="xl" />

      <Stack gap="sm" mb="xl">
        <Text>Metrics + Icon</Text>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
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
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
          <MetricCard.Root>
            <Group justify="space-between" wrap="nowrap">
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
                sections={[{ value: 32.4, color: 'teal.6' }]}
              />
            </Group>
          </MetricCard.Root>
          <MetricCard.Root>
            <Group justify="space-between" wrap="nowrap">
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
                sections={[{ value: 48, color: 'red.6' }]}
              />
            </Group>
          </MetricCard.Root>
          <MetricCard.Root>
            <Group justify="space-between" wrap="nowrap">
              <div>
                <MetricCard.TextMuted>Total Documents</MetricCard.TextMuted>
                <MetricCard.TextEmphasis mb="sm">
                  {formatInt(90875, { suffix: ' GB' })}
                </MetricCard.TextEmphasis>
                <MetricCard.TextTrend value={20.34}>last month</MetricCard.TextTrend>
              </div>

              <MetricCard.RingProgress
                size={92}
                label={formatPercentage(90.3, { precision: 0 })}
                sections={[{ value: 90.3, color: 'orange.6' }]}
              />
            </Group>
          </MetricCard.Root>
          <MetricCard.Root>
            <Group justify="space-between" wrap="nowrap">
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
                sections={[{ value: 54, color: 'blue.6' }]}
              />
            </Group>
          </MetricCard.Root>
        </SimpleGrid>
      </Stack>
    </Page>
  );
}
