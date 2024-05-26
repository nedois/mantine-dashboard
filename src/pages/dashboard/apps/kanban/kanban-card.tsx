import {
  PiChatDuotone as CommentsIcon,
  PiPaperclipDuotone as AttachmentsIcon,
} from 'react-icons/pi';
import { Avatar, Badge, Card, Group, Stack, Text, Title } from '@mantine/core';

interface KanbanCardProps {
  id: string;
  title: string;
  description?: string;
  commentsCount: number;
  attachmentsCount: number;
  tags: { id: string; label: string; color: string }[];
  priority: 'low' | 'normal' | 'high';
  assignees: { id: string; displayName: string; avatarUrl?: string }[];
}

const MAX_ASSIGNEES = 3;
const MAX_TAGS = 2;

const priorityColors = {
  low: 'gray',
  normal: 'blue',
  high: 'red',
};

export function KanbanCard({
  title,
  description,
  commentsCount,
  attachmentsCount,
  assignees,
  tags,
  priority,
}: KanbanCardProps) {
  return (
    <Card>
      <Stack>
        <Title order={6}>{title}</Title>
        <Text c="dimmed" fz="sm" lineClamp={2}>
          {description}
        </Text>

        <Group justify="space-between">
          <Group c="dimmed" fz="sm" gap="sm">
            <Group gap="0.25rem">
              <CommentsIcon />
              <Text c="inherit" fz="inherit">
                {commentsCount}
              </Text>
            </Group>
            <Group gap="0.25rem">
              <AttachmentsIcon />
              <Text c="inherit" fz="inherit">
                {attachmentsCount}
              </Text>
            </Group>
          </Group>

          <Avatar.Group>
            {assignees.splice(0, MAX_ASSIGNEES).map((assignee) => (
              <Avatar
                size="sm"
                src={assignee.avatarUrl}
                title={assignee.displayName}
                key={assignee.id}
              />
            ))}
            {assignees.length > MAX_ASSIGNEES && (
              <Avatar size="sm">{`+${assignees.length - MAX_ASSIGNEES}`}</Avatar>
            )}
          </Avatar.Group>
        </Group>

        <Group gap="0.25rem">
          <Badge size="xs" variant="outline" color={priorityColors[priority]}>
            {priority}
          </Badge>
          {tags.splice(0, MAX_TAGS).map((tag) => (
            <Badge key={tag.id} color={tag.color} size="xs" variant="outline">
              {tag.label}
            </Badge>
          ))}
          {tags.length > MAX_TAGS && (
            <Badge color="gray" size="xs" variant="outline">
              +{tags.length - MAX_TAGS}
            </Badge>
          )}
        </Group>
      </Stack>
    </Card>
  );
}
