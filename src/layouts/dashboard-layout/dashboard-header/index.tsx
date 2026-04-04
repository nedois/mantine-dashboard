import { ActionIcon, Badge, Group, TextInput } from "@mantine/core";

import { Icon } from "#/components";

import { DashboardAuthUser } from "./dashboard-auth-user";

export function DashboardHeader() {
  return (
    <Group h="100%" justify="space-between" px="md" w="100%" wrap="nowrap">
      <TextInput
        leftSection={<Icon icon="lucide:search" />}
        placeholder="Search for feature"
        rightSection={
          <Badge radius="sm" size="sm" variant="ghost">
            K
          </Badge>
        }
        visibleFrom="md"
      />

      <ActionIcon color="text" hiddenFrom="md">
        <Icon fz="xl" icon="lucide:search" />
      </ActionIcon>

      <Group>
        <DashboardAuthUser />
      </Group>
    </Group>
  );
}
