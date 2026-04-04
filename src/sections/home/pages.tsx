import { Box, Container, Card, SimpleGrid, Text } from "@mantine/core";
import { motion } from "motion/react";

import { varFade } from "#/animations";
import { Group, MotionViewport, Title } from "#/components";

const pages = [
  { icon: "📊", title: "Welcome Dashboard" },
  { icon: "👥", title: "Customer Management" },
  { icon: "📋", title: "Kanban Board" },
  { icon: "📈", title: "Analytics & Metrics" },
  { icon: "🔐", title: "Authentication Pages" },
  { icon: "⚙️", title: "Settings & Profile" },
];

export function Pages() {
  return (
    <MotionViewport>
      <Box py="5xl">
        <Container>
          <Title component={motion.h2} variants={varFade("inDown")} id="pages" order={2} ta="center" mb="md">
            20+ Ready-to-use Pages
          </Title>
          <Text component={motion.p} variants={varFade("inDown")} transition={{ delay: 0.1 }} ta="center" c="dimmed">
            From analytics to authentication, we've got every page you need.
          </Text>

          <SimpleGrid mt="4rem" cols={{ base: 1, md: 2, lg: 3 }}>
            {pages.map((page, index) => (
              <Card
                key={page.title}
                component={motion.div}
                variant="highlight"
                variants={varFade("inDown")}
                transition={{ delay: index * 0.05 }}
              >
                <Group>
                  <Text fz="2rem">{page.icon}</Text>
                  <Text fw={500}>{page.title}</Text>
                </Group>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </MotionViewport>
  );
}
