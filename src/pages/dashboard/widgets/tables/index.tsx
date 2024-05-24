import { Stack, Title } from '@mantine/core';

import { Page } from '@/components/page';
import { PageHeader } from '@/components/page-header';
import { routes } from '@/routes';
import { SimpleTable } from './simple-table';

const breadcrumbs = [
  { name: 'Dashboard', href: '/' },
  { name: 'Widgets', href: routes.dashboard.widgets.root },
  { name: 'Tables' },
];

const tables = [{ header: 'Simple Table', component: SimpleTable }];

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
