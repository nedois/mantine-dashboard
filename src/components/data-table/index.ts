import { DataTable as MantineDataTable } from 'mantine-datatable';

import { CardTitle } from '../card-title';
import { DataTableActions } from './data-table-actions';
import { DataTableContainer } from './data-table-container';
import { DataTableContent } from './data-table-content';
import { DataTableFilters } from './data-table-filters';
import { DataTableTabs } from './data-table-tabs';
import { useDataTable } from './use-data-table';

export const DataTable = {
  useDataTable,
  Title: CardTitle,
  Container: DataTableContainer,
  Content: DataTableContent,
  Tabs: DataTableTabs,
  Filters: DataTableFilters,
  Actions: DataTableActions,
  Table: MantineDataTable,
};
