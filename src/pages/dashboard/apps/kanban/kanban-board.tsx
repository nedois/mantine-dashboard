import { Flex, FlexProps, ScrollArea } from '@mantine/core';

type KanbanBoardProps = Pick<FlexProps, 'children' | 'gap'>;

export function KanbanBoard({ children, gap = 'md' }: KanbanBoardProps) {
  return (
    <ScrollArea>
      <Flex gap={gap} align="flex-start">
        {children}
      </Flex>
    </ScrollArea>
  );
}
