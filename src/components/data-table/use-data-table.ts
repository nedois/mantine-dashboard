import { useState } from 'react';

import { DataTableSortStatus } from 'mantine-datatable';
import { isDefined } from '@/utilities/is';
import { DataTableTabsProps } from './data-table-tabs';
import { DataTableFilter } from './data-table-filters';

interface UseDataTableArgs<SortableFields> {
  tabsConfig?: DataTableTabsProps;
  orderConfig?: {
    orderBy: DataTableSortStatus<SortableFields>['columnAccessor'];
    order: DataTableSortStatus<SortableFields>['direction'];
  };
}

export function useDataTable<SortableFields>({
  tabsConfig,
  orderConfig,
}: UseDataTableArgs<SortableFields>) {
  const [currentTab, setCurrentTab] = useState(tabsConfig?.tabs[0].value);
  const [filters, setFilters] = useState<Record<string, DataTableFilter>>({});
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<SortableFields>>({
    columnAccessor: orderConfig?.orderBy ?? '',
    direction: orderConfig?.order ?? 'asc',
  });

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    tabsConfig?.onChange?.(value);
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const handleRemoveFilter = (name: string) => {
    setFilters((prevFilters) => {
      const { [name]: removed, ...rest } = prevFilters;
      return rest;
    });
  };

  const handleChangeFilter = (filter: Omit<DataTableFilter, 'onRemove'>) => {
    if (isDefined(filter.value)) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filter.name]: {
          ...filter,
          onRemove: () => handleRemoveFilter(filter.name),
        },
      }));
    } else {
      handleRemoveFilter(filter.name);
    }
  };

  return {
    tabs: {
      value: currentTab,
      change: handleTabChange,
      tabs: tabsConfig?.tabs ?? [],
    },
    filters: {
      filters,
      clear: handleClearFilters,
      change: handleChangeFilter,
      remove: handleRemoveFilter,
    },
    order: {
      change: setSortStatus as any, // TODO: fix type
      orderBy: sortStatus.columnAccessor as keyof SortableFields,
      order: sortStatus.direction,
      status: sortStatus,
    },
  };
}
