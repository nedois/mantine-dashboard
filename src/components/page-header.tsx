import { type ElementProps, Group, type GroupProps, Title } from "@mantine/core";
import type { ReactNode } from "react";

import { Breadcrumbs } from "./breadcrumbs";
import type { BreadcrumbItemProps } from "./breadcrumbs/breadcrumbs-item";

export interface PageHeaderProps extends ElementProps<"header", keyof GroupProps>, Omit<GroupProps, "title"> {
  breadcrumbs?: Array<BreadcrumbItemProps>;
  title: ReactNode;
}

export function PageHeader({ breadcrumbs, children, mb = "xl", title, ...props }: PageHeaderProps) {
  return (
    <Group component="header" justify="space-between" mb={mb} {...props}>
      <div>
        <Title fz="3xl" order={2}>
          {title}
        </Title>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} mt="xs" />}
      </div>
      {children}
    </Group>
  );
}
