import { Button, Group } from '@mantine/core';
import { routes } from '@/routes';
import { PageHeader } from '@/components/page-header';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/color-scheme-toggle';

export function HomePage() {
  return (
    <>
      <PageHeader
        title="Products azd adz azd azd "
        breadcrumbs={[
          {
            href: routes.eCommerce.dashboard,
            name: 'E-Commerce',
          },
          {
            href: routes.eCommerce.products,
            name: 'Products',
          },
          {
            name: 'List',
          },
        ]}
      >
        <Group>
          <Button>Exportar</Button>
          <Button>Download</Button>
        </Group>
      </PageHeader>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
