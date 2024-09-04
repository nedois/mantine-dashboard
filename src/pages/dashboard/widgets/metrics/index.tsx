import { SimpleGrid, Stack, Text } from '@mantine/core';
import { Page } from '@/components/page';
import { PageHeader } from '@/components/page-header';
import { paths } from '@/routes/paths';
import { MetricsAndBarChart } from './metrics-and-bar-chart';
import { MetricsAndIcons } from './metrics-and-icons';
import { MetricsAndListAndChart } from './metrics-and-list-and-chart';
import { MetricsAndProgressBar } from './metrics-and-progress-bar';

const breadcrumbs = [
  { label: 'Dashboard', href: '/' },
  { label: 'Widgets', href: paths.dashboard.widgets.root },
  { label: 'Metrics' },
];

export default function MetricsWidgetsPage() {
  return (
    <Page title="Metrics widgets">
      <PageHeader title="Metrics" breadcrumbs={breadcrumbs} />

      <Stack gap="sm" mb="xl">
        <Text>Metrics + Icon2</Text>
        <SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }}>
          <MetricsAndIcons />
        </SimpleGrid>
      </Stack>

      <Stack gap="sm" mb="xl">
        <Text>Metrics + ProgressBar</Text>
        <SimpleGrid cols={{ base: 1, sm: 2, '2xl': 4 }}>
          <MetricsAndProgressBar />
        </SimpleGrid>
      </Stack>

      <Stack gap="sm" mb="xl">
        <Text>Metrics + BarChart</Text>
        <SimpleGrid cols={{ base: 1, sm: 2, '2xl': 4 }}>
          <MetricsAndBarChart />
        </SimpleGrid>
      </Stack>

      <Stack gap="sm" mb="xl">
        <Text>Metrics + List + Chart</Text>
        <SimpleGrid cols={{ base: 1, sm: 2, '2xl': 4 }}>
          <MetricsAndListAndChart />
        </SimpleGrid>
      </Stack>
    </Page>
  );
}
