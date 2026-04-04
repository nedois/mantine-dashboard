import { alpha, Box } from "@mantine/core";
import { createFileRoute, redirect } from "@tanstack/react-router";

import { CtaCard, Desktop, Features, Footer, Header, Hero, Pages, Pricing, Testimonials } from "#/sections/home";

export const Route = createFileRoute("/")({
  component: HomePage,
  beforeLoad: async () => {
    const isAuthenticated = false;

    if (isAuthenticated) {
      throw redirect({ to: "/overview" });
    }
  },
});

function HomePage() {
  return (
    <>
      <Header h="4rem" />
      <Box
        pt="4rem"
        bg={`radial-gradient(ellipse 80% 60% at 50% 30%, ${alpha("var(--mantine-color-primary-filled)", 0.06)}, transparent)`}
      >
        <Hero />
        <Desktop />
      </Box>
      <Features />
      <Pages />
      <Testimonials />
      <Pricing />
      <CtaCard />
      <Footer />
    </>
  );
}
