import { Page } from '@/components/page';
import { PageHeader } from '@/components/page-header';
import { routes } from '@/routes/paths';

const breadcrumbs = [
  { name: 'Dashboard', href: '/' },
  { name: 'Widgets', href: routes.dashboard.widgets.root },
  { name: 'Charts' },
];

export default function ChartsWidgets() {
  return (
    <Page title="Charts widgets">
      <PageHeader title="Charts" breadcrumbs={breadcrumbs} />
    </Page>
  );
}
