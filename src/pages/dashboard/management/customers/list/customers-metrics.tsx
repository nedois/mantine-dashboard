import { Group, SimpleGrid, Loader } from '@mantine/core';
import {
  PiUsersDuotone,
  PiProhibitDuotone,
  PiArchiveDuotone,
  PiPulseDuotone,
} from 'react-icons/pi';

import { useGetCustomersMetrics } from '@/services/resources/customers';
import { MetricCard } from '@/components/metric-card';
import { formatInt } from '@/utilities/number';

export function CustomerMetrics() {
  const { data: metrics, isLoading } = useGetCustomersMetrics();

  const cards = [
    { icon: PiUsersDuotone, title: 'Total customers', value: metrics?.total, color: 'blue' },
    { icon: PiPulseDuotone, title: 'Active customers', value: metrics?.banned, color: 'teal' },
    { icon: PiProhibitDuotone, title: 'Banned customers', value: metrics?.banned, color: 'orange' },
    { icon: PiArchiveDuotone, title: 'Archived customers', value: metrics?.banned, color: 'red' },
  ];

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, xl: 3, '2xl': 4 }}>
      {cards.map((card) => (
        <MetricCard.Root key={card.title}>
          <Group>
            <MetricCard.Icon c={card.color}>
              <card.icon size="2rem" />
            </MetricCard.Icon>
            <div>
              <MetricCard.TextMuted>{card.title}</MetricCard.TextMuted>
              <MetricCard.TextEmphasis>
                {isLoading ? <Loader size="sm" color={card.color} /> : formatInt(card.value ?? 0)}
              </MetricCard.TextEmphasis>
            </div>
          </Group>
        </MetricCard.Root>
      ))}
    </SimpleGrid>
  );
}
