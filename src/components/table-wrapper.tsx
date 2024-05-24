import { Card, CardProps } from '@mantine/core';

type TableWrapperProps = CardProps;

export function TableWrapper({ children, ...props }: TableWrapperProps) {
  return (
    <Card {...props}>
      <Card.Section>{children}</Card.Section>
    </Card>
  );
}
