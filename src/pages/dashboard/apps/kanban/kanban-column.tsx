import {
  PiDotsThreeVerticalBold as MenuIcon,
  PiPencilDuotone as EditIcon,
  PiTrashDuotone as DeleteIcon,
  PiBroomDuotone as ClearIcon,
} from 'react-icons/pi';
import { ActionIcon, Button, Card, Flex, FlexProps, Group, Menu, Title } from '@mantine/core';

interface KanbanColumnProps extends Pick<FlexProps, 'children' | 'w' | 'gap'> {
  id: string;
  title: string;
}

export function KanbanColumn({ children, title, w = '18rem', gap = 'sm' }: KanbanColumnProps) {
  return (
    <Card p="sm">
      <Group justify="space-between" mb="lg">
        <Title order={4}>{title}</Title>

        <Menu>
          <Menu.Target>
            <ActionIcon c="inherit">
              <MenuIcon size="1.2rem" />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<EditIcon size="1rem" />}>Rename</Menu.Item>
            <Menu.Item leftSection={<ClearIcon size="1rem" />}>Clear</Menu.Item>
            <Menu.Item c="red" leftSection={<DeleteIcon size="1rem" />}>
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>

      <Flex direction="column" w={w} gap={gap} mih="4rem">
        {children}
      </Flex>

      <Button fullWidth variant="subtle" mt="md">
        Add card
      </Button>
    </Card>
  );
}
