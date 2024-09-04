import {
  PiGitCommitDuotone,
  PiGitForkDuotone,
  PiGitPullRequestDuotone,
  PiStarDuotone,
} from 'react-icons/pi';
import { Group } from '@mantine/core';
import { MetricCard } from '@/components/metric-card';
import { formatInt } from '@/utilities/number';

const metrics = [
  { icon: PiStarDuotone, title: 'Repository stars', value: 44012 },
  { icon: PiGitCommitDuotone, title: 'Commits', value: 20450 },
  { icon: PiGitForkDuotone, title: 'Forks', value: 12450 },
  { icon: PiGitPullRequestDuotone, title: 'Pull Requests', value: 142 },
];

export function MetricsAndIcons() {
  return metrics.map(({ icon: Icon, title, value }) => (
    <MetricCard.Root key={title}>
      <Group>
        <MetricCard.Icon>
          <Icon size="2rem" />
        </MetricCard.Icon>
        <div>
          <MetricCard.TextMuted>{title}</MetricCard.TextMuted>
          <MetricCard.TextEmphasis>{formatInt(value)}</MetricCard.TextEmphasis>
        </div>
      </Group>
    </MetricCard.Root>
  ));
}
