import { Anchor, Button, Container, Flex, Group } from "@mantine/core";
import { Link } from "@tanstack/react-router";

import { Logo, FixedHeader, Icon, type FixedHeaderProps } from "#/components";

import { MobileMenu } from "./mobile-menu";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Header(props: Pick<FixedHeaderProps, "h">) {
  return (
    <FixedHeader {...props}>
      <Flex component={Container} strategy="block" flex="1" justify="space-between">
        <Group wrap="nowrap">
          <MobileMenu links={links} variant="subtle" color="text" hiddenFrom="lg" />
          <Logo />
        </Group>

        <Group gap="xl" visibleFrom="lg">
          {links.map(({ href, label }) => (
            <Anchor key={href} href={href} fz="sm" c="inherit">
              {label}
            </Anchor>
          ))}
        </Group>

        <Group gap="xs" wrap="nowrap">
          <Button component={Link} to="/overview" rightSection={<Icon icon="lucide:arrow-right" />}>
            Live Demo
          </Button>
        </Group>
      </Flex>
    </FixedHeader>
  );
}
