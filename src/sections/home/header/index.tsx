import { Anchor, Button, Container, Flex, Group } from "@mantine/core";

import { Logo, FixedHeader, Icon, type FixedHeaderProps } from "#/components";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Header(props: Pick<FixedHeaderProps, "h">) {
  return (
    <FixedHeader {...props}>
      <Flex component={Container} strategy="block" flex="1" justify="space-between">
        <Logo href="/" />

        <Group gap="xl" visibleFrom="lg">
          {links.map(({ href, label }) => (
            <Anchor key={href} href={href} fz="sm" c="dimmed">
              {label}
            </Anchor>
          ))}
        </Group>

        <Group gap="xs" wrap="nowrap">
          <Button rightSection={<Icon icon="lucide:arrow-right" />}>Live Demo</Button>
        </Group>
      </Flex>
    </FixedHeader>
  );
}
