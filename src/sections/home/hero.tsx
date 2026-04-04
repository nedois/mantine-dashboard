import { Badge, Button, Flex, Stack, Text, type BoxProps } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { varFade } from "#/animations";
import { Icon, Title, MotionViewport, Group } from "#/components";

const techs = ["Mantine", "TanStack Router", "Motion"];

const metrics = [
  { label: "Downloads", value: "10K+" },
  { label: "Happy Customers", value: "500+" },
  { label: "Average Rating", value: "4.9" },
  { label: "Support", value: "24/7" },
];

type HeroProps = Omit<BoxProps, "children" | "style">;

export function Hero(props: HeroProps) {
  return (
    <MotionViewport w="100%" {...props}>
      <Flex direction="column" w="100%" ta="center" py="4rem" px="sm" mx="auto" maw={896}>
        <Flex component={Stack} gap="xl" align="center">
          <Badge
            component={motion.div}
            variants={varFade("inDown")}
            fw={600}
            fz="xs"
            size="xl"
            variant="outline"
            bg="var(--mantine-color-primary-light)"
            leftSection={<Icon icon="lucide:sparkles" />}
          >
            New: Mantine v9 & 10+ components added
          </Badge>

          <Title
            component={motion.h1}
            variants={varFade("inDown")}
            transition={{ delay: 0.1 }}
            order={1}
            textWrap="balance"
            fz="r5xl"
            lh="1"
          >
            The Ultimate{" "}
            <Text inherit span variant="gradient" gradient={{ from: "primary", to: "purple", deg: 90 }}>
              Mantine Dashboard Template
            </Text>{" "}
            for Modern Apps
          </Title>

          <Group wrap="wrap" component={motion.div} variants={varFade("inDown")} transition={{ delay: 0.15 }}>
            {techs.map((tech) => (
              <Badge key={tech} fz="xs" size="xl" variant="default">
                {tech}
              </Badge>
            ))}
          </Group>

          <Text
            component={motion.p}
            variants={varFade("inDown")}
            transition={{ delay: 0.25 }}
            maw={672}
            size="xl"
            c="dimmed"
          >
            Build stunning admin panels, SaaS dashboards, and internal tools in minutes. Powered by TanStack Start,
            Mantine, and Framer Motion.
          </Text>

          <Group
            component={motion.div}
            variants={varFade("inDown")}
            transition={{ delay: 0.3 }}
            grow
            w="100%"
            maw={380}
          >
            <Button size="lg" rightSection={<Icon icon="lucide:arrow-right" />}>
              Get Started
            </Button>
            <Button component={Link} variant="default" size="lg" to="/dashboard">
              View Live Demo
            </Button>
          </Group>
        </Flex>

        <Group
          component={motion.div}
          variants={varFade("inDown")}
          transition={{ delay: 0.4 }}
          wrap="wrap"
          justify="space-between"
          w="100%"
          mt="5xl"
          px="xl"
          py="2xl"
          style={{
            borderTop: "1px solid var(--mantine-color-default-border)",
            borderBottom: "1px solid var(--mantine-color-default-border)",
          }}
        >
          {metrics.map((metric) => (
            <div key={metric.label}>
              <Title component="p" order={3}>
                {metric.value}
              </Title>
              <Text fz="sm" c="dimmed" component="span">
                {metric.label}
              </Text>
            </div>
          ))}
        </Group>
      </Flex>
    </MotionViewport>
  );
}
