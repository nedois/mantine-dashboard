import { createPolymorphicComponent, Title as MantineTitle, type TitleProps } from "@mantine/core";

export const Title = createPolymorphicComponent<"h1", TitleProps>(MantineTitle);
