import { Stack, Title } from '@mantine/core';
import { Page } from '@/components/page';
import { PageHeader } from '@/components/page-header';
import { paths } from '@/routes';
import { AdvancedDataTable } from './advanced-data-table';
import { SimpleTable } from './simple-table';

const breadcrumbs = [
  { label: 'Dashboard', href: '/' },
  { label: 'Widgets', href: paths.dashboard.widgets.root },
  { label: 'Tables' },
];

const tables = [
  { header: 'Simple Table', component: SimpleTable },
  { header: 'Advanced Data table', component: AdvancedDataTable },
];

export default function TablesPage() {
  return (
    <Page title="Tables">
      <PageHeader title="Tables" breadcrumbs={breadcrumbs} />

      <Stack gap="xl">
        {tables.map(({ header, component: Component }) => (
          <Stack key={header}>
            <Title order={4}>{header}</Title>

            <Component />
          </Stack>
        ))}
      </Stack>
    </Page>
  );
}
