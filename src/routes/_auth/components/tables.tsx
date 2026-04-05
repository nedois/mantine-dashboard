import { Stack, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

import { DashboardPage } from "#/components";
import { AdvancedDataTableDemo, SimpleTableDemo } from "#/sections/components/tables";

export const Route = createFileRoute("/_auth/components/tables")({
  component: RouteComponent,
});

const breadcrumbs = [
  { label: "Dashboard", to: "/overview" },
  { label: "Components", to: "/components/showcase" },
  { label: "Tables" },
];

const tables = [
  { header: "Simple Table", component: SimpleTableDemo },
  { header: "Advanced Data table", component: AdvancedDataTableDemo },
];

function RouteComponent() {
  return (
    <DashboardPage title="Tables" breadcrumbs={breadcrumbs}>
      <Stack gap="2xl">
        {tables.map(({ header, component: Component }) => (
          <Stack key={header}>
            <Title order={5}>{header}</Title>

            <Component />
          </Stack>
        ))}
      </Stack>
    </DashboardPage>
  );
}
