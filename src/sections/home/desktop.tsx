import { Card, Flex, Group, Text } from "@mantine/core";
import { motion } from "motion/react";

import { varFade } from "#/animations";
import { Container, Icon, MotionViewport } from "#/components";

export function Desktop() {
  return (
    <MotionViewport>
      <Container pb="4rem" h="600px">
        <Card
          component={motion.div}
          variants={varFade("inDown", { distance: 40 })}
          transition={{ delay: 0.5, duration: 0.3 }}
          radius="lg"
          shadow="xl"
        >
          <Card.Section withBorder>
            <Flex pos="relative" align="center" justify="center" h={49}>
              <Group gap="3xs" pos="absolute" left="1rem">
                <Icon icon="material-symbols:circle" fz="0.8rem" c="red.4" />
                <Icon icon="material-symbols:circle" fz="0.8rem" c="yellow.4" />
                <Icon icon="material-symbols:circle" fz="0.8rem" c="green.4" />
              </Group>

              <Text fz="xs" c="dimmed">
                https://manti-dash.nedois.com
              </Text>
            </Flex>
          </Card.Section>
        </Card>
      </Container>
    </MotionViewport>
  );
}
