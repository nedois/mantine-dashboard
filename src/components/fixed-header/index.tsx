import { createPolymorphicComponent, Flex, type FlexProps } from "@mantine/core";
import clsx from "clsx";

import classes from "./fixed-header.module.css";

export type FixedHeaderProps = FlexProps;

export const FixedHeader = createPolymorphicComponent<"div", FixedHeaderProps>(
  ({ children, className, ...props }: FixedHeaderProps) => (
    <Flex className={clsx(classes.root, className)} {...props}>
      {children}
    </Flex>
  )
);
