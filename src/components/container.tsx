import { type ContainerProps, createPolymorphicComponent, Container as MantineContainer } from "@mantine/core";

export const Container = createPolymorphicComponent<"div", ContainerProps>(MantineContainer);
