import { forwardRef } from 'react';
import { CardSection } from '@mantine/core';
import { DataTable, DataTableProps } from 'mantine-datatable';

export const DataTableContent = forwardRef<HTMLDivElement, DataTableProps>(
  ({ highlightOnHover = true, ...props }, ref) => (
    <CardSection ref={ref}>
      <DataTable highlightOnHover={highlightOnHover} {...props} />
    </CardSection>
  )
);
