import { ActionIcon, Group, GroupProps } from '@mantine/core';
import {
  PiPencilDuotone as EditIcon,
  PiTrashDuotone as DeleteIcon,
  PiEyeDuotone as ShowIcon,
} from 'react-icons/pi';

interface DataTableActionsProps extends GroupProps {
  onEdit?: () => void;
  onView?: () => void;
  onDelete?: () => void;
}

export function DataTableActions({
  gap = '0.10rem',
  justify = 'right',
  wrap = 'nowrap',
  onEdit,
  onView,
  onDelete,
  children,
  ...props
}: DataTableActionsProps) {
  return (
    <Group gap={gap} justify={justify} wrap={wrap} {...props}>
      {onView && (
        <ActionIcon c="inherit" onClick={onView}>
          <ShowIcon size="1rem" />
        </ActionIcon>
      )}
      {onEdit && (
        <ActionIcon c="inherit" onClick={onEdit}>
          <EditIcon size="1rem" />
        </ActionIcon>
      )}

      {onDelete && (
        <ActionIcon color="red" onClick={onDelete}>
          <DeleteIcon size="1rem" />
        </ActionIcon>
      )}

      {children}
    </Group>
  );
}
