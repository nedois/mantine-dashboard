import { Grid } from '@mantine/core';
import { Page } from '@/components/page';
import { PageHeader } from '@/components/page-header';
import { paths } from '@/routes';
import { CustomerMetrics } from './customers-metrics';
import { CustomersTable } from './customers-table';

const breadcrumbs = [
  { label: 'Dashboard', href: paths.dashboard.root },
  { label: 'Management', href: paths.dashboard.management.root },
  { label: 'Customers', href: paths.dashboard.management.customers.root },
  { label: 'List' },
];

export default function ListCustomersPage() {
  return (
    <Page title="List customers">
      <PageHeader title="List customers" breadcrumbs={breadcrumbs} />

      <Grid>
        <Grid.Col span={12}>
          <CustomerMetrics />
        </Grid.Col>

        <Grid.Col span={12}>
          <CustomersTable />
        </Grid.Col>
      </Grid>
    </Page>
  );
}
