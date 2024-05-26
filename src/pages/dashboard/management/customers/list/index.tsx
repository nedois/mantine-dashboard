import { Page } from '@/components/page';
import { PageHeader } from '@/components/page-header';
import { routes } from '@/routes';

const breadcrumbs = [
  { label: 'Dashboard', href: routes.dashboard.root },
  { label: 'Management', href: routes.dashboard.management.root },
  { label: 'Customers', href: routes.dashboard.management.customers.root },
  { label: 'List' },
];

export default function ListCustomersPage() {
  return (
    <Page title="List customers">
      <PageHeader title="List customers" breadcrumbs={breadcrumbs} />
    </Page>
  );
}
