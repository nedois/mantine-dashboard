import { useState } from 'react';

import { isDefined } from '@/utilities/is';
import { DataTableTabsProps } from './data-table-tabs';
import { DataTableFilter } from './data-table-filters';

interface UseDataTableArgs {
  tabsConfig?: DataTableTabsProps;
}

export function useDataTable({ tabsConfig }: UseDataTableArgs) {
  const [currentTab, setCurrentTab] = useState(tabsConfig?.tabs[0].value);
  const [filters, setFilters] = useState<Record<string, DataTableFilter>>({});

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
  };
}
