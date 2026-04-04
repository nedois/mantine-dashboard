import { Avatar, Box, Container, Paper, Rating, SimpleGrid, Text } from "@mantine/core";
import { motion } from "motion/react";

import { varFade } from "#/animations";
import { Group, MotionViewport, Title } from "#/components";

const testimonials = [
  {
    rating: 5,
    user: {
      name: "Sarah Chen",
      role: "Frontend Developer at TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    },
    comment:
      "This dashboard saved me weeks of development time. The code quality is exceptional and it's so easy to customize.",
  },
  {
    rating: 4,
    comment: "Best investment I've made for my SaaS. Professional, modern, and my users love the interface.",
    user: {
      name: "Marcus Johnson",
      role: "Startup Founder at LaunchPad",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
  },
  {
    rating: 5,
    comment: "The attention to detail is incredible. Every component feels polished and thoughtfully designed.",
    user: {
      name: "Emily Rodriguez",
      role: "Product Designer at DesignStudio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
  },
];

export function Testimonials() {
  return (
    <MotionViewport>
      <Box py="5xl" bg="var(--mantine-color-default)">
        <Container>
          <Title id="testimonials" component={motion.h2} variants={varFade("inDown")} order={2} ta="center" mb="md">
            Loved by developers worldwide
          </Title>

          <SimpleGrid mt="4rem" cols={{ base: 1, md: 3 }}>
            {testimonials.map((testimonial, index) => (
              <Paper
                key={testimonial.user.name}
                component={motion.div}
                variants={varFade("inDown")}
                transition={{ delay: index * 0.1 }}
                p="lg"
              >
                <Rating value={testimonial.rating} mb="md" readOnly />
                <Text mb="xl" lineClamp={3}>
                  "{testimonial.comment}"
                </Text>

                <Group align="center" wrap="nowrap">
                  <Avatar src={testimonial.user.avatar} />
                  <div>
                    <Text fw={500}>{testimonial.user.name}</Text>
                    <Text fz="sm" c="dimmed">
                      {testimonial.user.role}
                    </Text>
                  </div>
                </Group>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </MotionViewport>
  );
}
