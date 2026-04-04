import { createPolymorphicComponent, Stack as MantineStack, type StackProps } from "@mantine/core";

export const Stack = createPolymorphicComponent<"div", StackProps>(MantineStack);
