import { createPolymorphicComponent, type GroupProps, Group as MantineGroup } from "@mantine/core";

export const Group = createPolymorphicComponent<"div", GroupProps>(MantineGroup);
