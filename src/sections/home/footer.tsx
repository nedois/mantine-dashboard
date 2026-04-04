import { Anchor, Container, Flex, Group, Text } from "@mantine/core";

import { Logo } from "#/components";

const navLinks = [
  { href: "/docs", label: "Documentation" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
];

export function Footer() {
  return (
    <Container mt="5xl" py="xl" style={{ borderTop: "1px solid var(--mantine-color-default-border)" }}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="lg">
        <Logo />

        <Group gap="xl">
          {navLinks.map((link) => (
            <Anchor key={link.href} fz="sm" c="dimmed">
              {link.label}
            </Anchor>
          ))}
        </Group>

        <Text fz="sm" c="dimmed">
          Made with ❤️ by{" "}
          <Anchor href="https://github.com/nedois" target="_blank">
            Nedois
          </Anchor>
        </Text>
      </Flex>
    </Container>
  );
}
