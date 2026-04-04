import { ActionIcon, type ActionIconProps, Drawer, NavLink, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Logo, Icon } from "#/components";

interface MobileMenuProps extends Omit<ActionIconProps, "children" | "open"> {
  links: Array<{ href: string; label: string }>;
}

export function MobileMenu({ links, ...props }: MobileMenuProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ActionIcon onClick={open} {...props}>
        <Icon icon="ri:menu-4-line" fz="xl" />
      </ActionIcon>

      <Drawer.Root opened={opened} onClose={close} size="xs" zIndex={900} keepMounted>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Logo />
          </Drawer.Header>
          <Drawer.Body>
            <Stack gap="xs">
              {links.map((link) => (
                <NavLink key={link.href} label={link.label} href={link.href} onClick={close} />
              ))}
            </Stack>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}
