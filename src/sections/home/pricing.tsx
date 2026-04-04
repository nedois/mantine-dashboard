import { Badge, Box, Button, Container, Card, SimpleGrid, Stack, Text } from "@mantine/core";
import { motion } from "motion/react";

import { varFade } from "#/animations";
import { Group, Icon, MotionViewport, Title } from "#/components";

const prices = [
  {
    name: "Personal",
    description: "Perfect for side projects",
    price: 49,
    popular: false,
    features: ["All dashboard pages", "React + TypeScript source", "Mantine", "6 months updates", "Email support"],
  },
  {
    name: "Professional",
    description: "For professional developers",
    price: 99,
    popular: true,
    features: [
      "Everything in Personal",
      "AdonisJS backend included",
      "Novu notifications integration",
      "Premium components",
      "Figma design files",
      "12 months updates",
      "Priority support",
    ],
  },
  {
    name: "Team",
    description: "For agencies & teams",
    price: 249,
    popular: false,
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "White-label license",
      "Lifetime updates",
      "Slack support channel",
      "Custom components",
    ],
  },
];

export function Pricing() {
  return (
    <MotionViewport>
      <Box py="5rem">
        <Container>
          <Title id="pricing" component={motion.h2} variants={varFade("inDown")} order={2} ta="center" mb="md">
            Simple, transparent pricing
          </Title>
          <Text component={motion.p} variants={varFade("inDown")} transition={{ delay: 0.1 }} ta="center" c="dimmed">
            Choose the plan that fits your needs. No hidden fees.
          </Text>

          <SimpleGrid mt="4rem" w="fit-content" mx="auto" verticalSpacing="xl" cols={{ base: 1, md: 3 }}>
            {prices.map((price, index) => (
              <Card
                key={price.name}
                component={motion.div}
                variants={varFade("inDown")}
                transition={{ delay: index * 0.1 }}
                bd={price.popular ? "1px solid primary" : undefined}
                style={{ overflow: "visible" }}
                pos="relative"
                p="lg"
                pt="2rem"
                h="fit-content"
                my="auto"
              >
                {price.popular && (
                  <Badge
                    fz="xs"
                    size="lg"
                    pos="absolute"
                    top="0"
                    left="50%"
                    style={{ transform: "translate(-50%,-50%)" }}
                  >
                    Most Popular
                  </Badge>
                )}

                <Text fw={500} ta="center" fz="lg">
                  {price.name}
                </Text>
                <Text fz="sm" c="dimmed" ta="center">
                  {price.description}
                </Text>
                <Text ta="center" fw="bold" fz="h2" mt="md">
                  ${price.price}{" "}
                  <Text span c="dimmed">
                    USD
                  </Text>
                </Text>

                <Stack gap="xs" my="lg">
                  {price.features.map((feature) => (
                    <Group key={feature} gap="xs" align="center">
                      <Icon icon="lucide:check" c={price.popular ? "primary" : "text"} />
                      <Text fz="sm">{feature}</Text>
                    </Group>
                  ))}
                </Stack>

                <Button fullWidth variant={price.popular ? "filled" : "default"}>
                  Get started
                </Button>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </MotionViewport>
  );
}
