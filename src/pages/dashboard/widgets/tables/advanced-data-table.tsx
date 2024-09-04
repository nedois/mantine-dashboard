import { Badge, MultiSelect, Radio, Stack, TextInput } from '@mantine/core';
import { usePagination } from '@/api/helpers';
import { DataTable } from '@/components/data-table';
import { ExportButton } from '@/components/export-button';
import { useGetCompanies } from '@/hooks';

export function AdvancedDataTable() {
  const { page, limit, setLimit, setPage } = usePagination({ page: 1, limit: 10 });
  const { data, isLoading } = useGetCompanies({ query: { page, limit } });

  const totalRecords = data?.meta.total ?? 0;
  const records = data?.data ?? [];

  const { tabs, filters } = DataTable.useDataTable({
    tabsConfig: {
      tabs: [
        { value: 'all', label: 'All', counter: totalRecords },
        { value: 'pending', label: 'Pending', color: 'orange', counter: 10 },
        { value: 'cancelled', label: 'Cancelled', color: 'gray', disabled: true },
        { value: 'deleted', label: 'Deleted', counter: 0, color: 'red' },
      ],
    },
  });

  const uniqueStatesOptions = Array.from(new Set(records.map((company) => company.state)));

  return (
    <DataTable.Container>
      <DataTable.Title
        title="Richest companies"
        description="Top 10 richest companies in USA"
        actions={
          <ExportButton variant="default" size="xs">
            Export
          </ExportButton>
        }
      />

      <DataTable.Tabs tabs={tabs.tabs} onChange={tabs.change} />

      <DataTable.Filters filters={filters.filters} onClear={filters.clear} />

      <DataTable.Content>
        <DataTable.Table
          page={page}
          records={records}
          fetching={isLoading}
          onPageChange={setPage}
          recordsPerPage={limit}
          totalRecords={totalRecords}
          onRecordsPerPageChange={setLimit}
          recordsPerPageOptions={[5, 10, 30]}
          columns={[
            {
              accessor: 'name',
              filtering: Boolean(filters.filters.name),
              filter: (
                <TextInput
                  placeholder="Search by name"
                  value={filters.filters.name?.value as string}
                  onChange={(e) =>
                    filters.change({
                      name: 'name',
                      label: 'Name',
                      value: e.currentTarget.value,
                    })
                  }
                />
              ),
            },
            { accessor: 'address' },
            { accessor: 'city' },
            {
              accessor: 'state',
              filtering: Boolean(filters.filters.state),
              filter: (
                <MultiSelect
                  w="10rem"
                  data={uniqueStatesOptions}
                  value={filters.filters.state?.value as string[]}
                  onChange={(value) =>
                    filters.change({
                      name: 'state',
                      label: 'States',
                      value,
                    })
                  }
                />
              ),
            },
            {
              accessor: 'active',
              width: 120,
              filtering: Boolean(filters.filters.active),
              filter: (
                <Radio.Group
                  value={filters.filters.active?.value ? 'true' : 'false'}
                  onChange={(value) =>
                    filters.change({
                      name: 'active',
                      label: 'Active',
                      value: value === 'true',
                      valueLabel: value === 'true' ? 'Active' : 'Inactive',
                    })
                  }
                >
                  <Stack>
                    <Radio value="true" label="Active" />
                    <Radio value="false" label="Inactive" />
                  </Stack>
                </Radio.Group>
              ),
              render: (company) => (
                <Badge w="100%" size="sm" variant="outline" color={company.active ? 'teal' : 'red'}>
                  {company.active ? 'Active' : 'Inactive'}
                </Badge>
              ),
            },
          ]}
        />
      </DataTable.Content>
    </DataTable.Container>
  );
}
