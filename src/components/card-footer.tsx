import { Card, type CardSectionProps, Divider } from "@mantine/core";
import type { ReactNode } from "react";

export interface CardFooterProps extends CardSectionProps {
  children?: ReactNode;
}

export function CardFooter({ children, ...props }: CardFooterProps) {
  return (
    <>
      <Card.Section mb="md">
        <Divider />
      </Card.Section>
      <Card.Section pb="md" {...props}>
        {children}
      </Card.Section>
    </>
  );
}
