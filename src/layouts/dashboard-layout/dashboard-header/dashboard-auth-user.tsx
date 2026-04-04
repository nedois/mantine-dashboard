import { Avatar, type AvatarProps, type ElementProps, Menu } from "@mantine/core";

import { Icon } from "#/components";

const user = {
  name: "John Doe",
  displayName: "John Doe",
};

type DashboardAuthUserProps = ElementProps<"div", keyof AvatarProps> & Omit<AvatarProps, "alt" | "src">;

export function DashboardAuthUser(props: DashboardAuthUserProps) {
  return (
    <Menu>
      <Menu.Target>
        <Avatar {...props} alt={user.name} color="initials" name={user.displayName} style={{ cursor: "pointer" }} />
      </Menu.Target>
      <Menu.Dropdown w={240}>
        <Menu.Divider />
        <Menu.Item leftSection={<Icon icon="lucide:log-out" />}>Sign out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
