import { NavLink } from 'react-router-dom';
import { GroupProps, ElementProps, Title, Breadcrumbs, Anchor, Text, Group } from '@mantine/core';

interface PageHeaderProps extends GroupProps, ElementProps<'header', keyof GroupProps> {
  title: string;
  breadcrumbs?: { name: string; href?: string }[];
}

export function PageHeader({ children, title, breadcrumbs, className, ...props }: PageHeaderProps) {
  return (
    <Group component="header" justify="space-between" className={className} {...props}>
      <div>
        <Title component="h2" order={2}>
          {title}
        </Title>

        {breadcrumbs && (
          <Breadcrumbs mt="sm">
            {breadcrumbs.map((breadcrumb) =>
              breadcrumb.href ? (
                <Anchor
                  fz="sm"
                  underline="never"
                  c="inherit"
                  component={NavLink}
                  key={breadcrumb.name}
                  to={breadcrumb.href}
                >
                  {breadcrumb.name}
                </Anchor>
              ) : (
                <Text key={breadcrumb.name} c="dimmed" fz="sm">
                  {breadcrumb.name}
                </Text>
              )
            )}
          </Breadcrumbs>
        )}
      </div>

      {children}
    </Group>
  );
}
