import { Box, Button, Container, Group, Text } from "@mantine/core";
import { motion } from "motion/react";

import { varFade } from "#/animations";
import { Icon, MotionViewport } from "#/components";

export function CtaCard() {
  return (
    <MotionViewport>
      <Container>
        <Box
          bg="dark.8"
          ta="center"
          p="4rem"
          bdrs="lg"
          pos="relative"
          c="var(--mantine-primary-color-contrast)"
          component={motion.div}
          variants={varFade("inDown")}
        >
          <Box
            pos="absolute"
            top="0"
            right="0"
            w="64"
            h="64"
            bg="primary"
            bdrs="100%"
            style={{ filter: "blur(64px)" }}
          />
          <Box
            pos="absolute"
            bottom="0"
            left="0"
            w="48"
            h="48"
            bg="primary"
            bdrs="100%"
            style={{ filter: "blur(64px)" }}
          />

          <Text fz="h2" fw="bold" mb="md">
            Ready to build something amazing?
          </Text>
          <Text mb="xl">Join thousands of developers who ship faster with MantiDash.</Text>

          <Group justify="center">
            <Button size="lg" rightSection={<Icon icon="lucide:arrow-right" />}>
              Get MantiDash Now
            </Button>
            <Button size="lg" variant="subtle" c="var(--mantine-primary-color-contrast)">
              Try Demo First
            </Button>
          </Group>
        </Box>
      </Container>
    </MotionViewport>
  );
}
