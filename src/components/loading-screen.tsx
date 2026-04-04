import { Flex, type FlexProps, Loader } from "@mantine/core";

import { Logo } from "#/components/logo";

type LoadingScreenProps = Omit<FlexProps, "children">;

export function LoadingScreen(props: LoadingScreenProps) {
  return (
    <Flex align="center" direction="column" gap="md" justify="center" {...props}>
      <Logo c="primary" h="4rem" hiddenFrom="md" />
      <Loader />
    </Flex>
  );
}
