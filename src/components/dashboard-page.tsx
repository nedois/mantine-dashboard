import { Flex, type FlexProps } from "@mantine/core";
import { type ReactNode } from "react";

import { PageHeader, type PageHeaderProps } from "./page-header";

export interface DashboardPageProps
  extends Omit<FlexProps, "title">, Partial<Pick<PageHeaderProps, "breadcrumbs" | "title">> {
  actions?: ReactNode;
  children: ReactNode;
}

export function DashboardPage({ actions, breadcrumbs, children, title, ...props }: DashboardPageProps) {
  return (
    <Flex direction="column" flex="1" {...props}>
      {title && (
        <PageHeader breadcrumbs={breadcrumbs} title={title}>
          {actions}
        </PageHeader>
      )}
      {children}
    </Flex>
  );
}
