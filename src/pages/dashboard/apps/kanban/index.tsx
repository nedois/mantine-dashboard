import { PiBarricadeDuotone as WipIcon } from 'react-icons/pi';
import { Page } from '@/components/page';
import { PageHeader } from '@/components/page-header';
import { paths } from '@/routes';
import { Kanban } from './kanban';

const breadcrumbs = [
  { label: 'Dashboard', href: paths.dashboard.root },
  { label: 'Apps', href: paths.dashboard.apps.root },
  { label: 'Kanban' },
];

export default function KanbanPage() {
  return (
    <Page title="Kanban">
      <PageHeader
        title={['Kanban ', <WipIcon key="wip" color="var(--mantine-color-yellow-6)" />]}
        breadcrumbs={breadcrumbs}
      />

      <Kanban />
    </Page>
  );
}
