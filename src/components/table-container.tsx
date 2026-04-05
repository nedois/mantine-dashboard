import { Card, type CardProps, CardSection } from "@mantine/core";
import type { JSX, ReactNode, Ref } from "react";

import { CardHeader } from "./card-header";

export interface TableContainerProps extends CardProps {
  actions?: ReactNode;
  containerRef?: Ref<HTMLDivElement>;
  description?: string;
  footer?: ReactNode;
  title?: string;
}

export function TableContainer({
  actions,
  children,
  containerRef,
  description,
  footer,
  title,
  ...props
}: TableContainerProps): JSX.Element {
  return (
    <Card {...props}>
      {title && (
        <CardHeader description={description} title={title}>
          {actions}
        </CardHeader>
      )}
      <CardSection flex="1" mih="0" ref={containerRef}>
        {children}
      </CardSection>
      {footer && <CardSection>{footer}</CardSection>}
    </Card>
  );
}
