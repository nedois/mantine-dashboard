import { Box, Card, Container, Text, ThemeIcon } from "@mantine/core";
import { motion } from "motion/react";

import { varFade } from "#/animations";
import { BentoGrid, Icon, MotionViewport, TiltBox, Title } from "#/components";

const features = [
  {
    icon: "lucide:palette",
    title: "Mantine UI",
    description:
      "Beautiful, accessible components from Mantine. Fully customizable with a rich ecosystem of hooks and utilities.",
    colSpan: { base: 1, md: 2 },
    rowSpan: { base: 1, md: 2 },
  },
  {
    icon: "lucide:code-xml",
    title: "TanStack",
    description: "Built with TanStack router for optimal performance, SSR, and modern React patterns.",
  },
  {
    icon: "lucide:zap",
    title: "Framer Motion",
    description: "Fluid animations and micro-interactions powered by Framer Motion for a polished user experience.",
  },
  {
    icon: "lucide:moon",
    title: "Dark Mode",
    description: "Built-in dark mode support with seamless theme switching and persistent preferences.",
  },
  {
    icon: "lucide:smartphone",
    title: "Fully Responsive",
    description: "Looks great on any device. Mobile-first design with breakpoints for all screen sizes.",
    colSpan: { base: 1, md: 2 },
  },
  {
    icon: "lucide:shield",
    title: "Production Ready",
    description: "Battle-tested components with TypeScript, proper error handling, and edge case coverage.",
  },
];

export function Features() {
  return (
    <MotionViewport>
      <Box py="5xl">
        <Container>
          <Title id="features" component={motion.h2} variants={varFade("inDown")} order={2} ta="center" mb="md">
            Everything you need to build faster
          </Title>
          <Text component={motion.p} variants={varFade("inDown")} transition={{ delay: 0.1 }} ta="center" c="dimmed">
            Packed with features that help you ship professional dashboards in record time.
          </Text>

          <BentoGrid mt="4rem" columns={{ base: 1, md: 3 }} gap="lg">
            {features.map((feature, index) => (
              <BentoGrid.Item
                component={TiltBox}
                key={feature.title}
                colSpan={feature.colSpan}
                rowSpan={feature.rowSpan}
              >
                <Card
                  variant="highlight"
                  component={motion.div}
                  variants={varFade("inDown")}
                  transition={{ delay: index * 0.1 }}
                  p="lg"
                  h="100%"
                >
                  <ThemeIcon size="xl" mb="sm">
                    <Icon icon={feature.icon} fz="xl" />
                  </ThemeIcon>
                  <Text fw={600} mb="sm">
                    {feature.title}
                  </Text>
                  <Text c="dimmed">{feature.description}</Text>
                </Card>
              </BentoGrid.Item>
            ))}
          </BentoGrid>
        </Container>
      </Box>
    </MotionViewport>
  );
}
