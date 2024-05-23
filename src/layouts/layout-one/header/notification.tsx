import { ReactNode } from 'react';
import {
  UnstyledButton,
  UnstyledButtonProps,
  ElementProps,
  Group,
  Text,
  Grid,
} from '@mantine/core';

import { CustomDate, formatRelativeDate } from '@/utilities/date';
import { capitalize } from '@/utilities/text';
import classes from './notification.module.css';

interface NotificationBaseProps
  extends ElementProps<'button', keyof UnstyledButtonProps>,
    UnstyledButtonProps {
  title: string;
  receivedAt: CustomDate | Date;
  scope?: string;
  icon?: ReactNode;
}

export function Notification({
  title,
  receivedAt,
  children,
  scope,
  icon: Icon,
  ...props
}: NotificationBaseProps) {
  return (
    <UnstyledButton className={classes.root} {...props}>
      <Grid>
        <Grid.Col span={2}>{Icon}</Grid.Col>

        <Grid.Col span={10}>
          <Text>{title}</Text>
          <Group gap="xs" c="dimmed" fz="sm">
            <Text c="inherit" fz="inherit">
              {formatRelativeDate(receivedAt)}
            </Text>
            {scope && (
              <>
                <Text c="inherit" fz="inherit">
                  &#x2022;
                </Text>
                <Text c="inherit" fz="inherit">
                  {capitalize(scope)}
                </Text>
              </>
            )}
          </Group>

          {children}
        </Grid.Col>
      </Grid>
    </UnstyledButton>
  );
}
