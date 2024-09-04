import { useMemo } from 'react';
import { DataTableColumn } from 'mantine-datatable';
import { Avatar, Box, Group, Loader, Rating, Text } from '@mantine/core';
import { Customer } from '@/api/entities';
import { usePagination } from '@/api/helpers';
import { AddButton } from '@/components/add-button';
import { DataTable } from '@/components/data-table';
import { LinkChip } from '@/components/link-chip';
import { CustomerStatusBadge } from '@/components/resources/customers';
import { useGetCustomers, useGetCustomersMetrics } from '@/hooks';
import { paths } from '@/routes';
import { formatDate } from '@/utilities/date';
import { formatPhoneNumber } from '@/utilities/phone-number';
import { firstLetters } from '@/utilities/text';

type SortableFields = Pick<Customer, 'fullName' | 'rating' | 'createdAt'>;

export function CustomersTable() {
  const { data: metrics } = useGetCustomersMetrics();
  const { page, limit, setLimit, setPage } = usePagination();
  const { tabs, filters, sort } = DataTable.useDataTable<SortableFields>({
    sortConfig: {
      direction: 'asc',
      column: 'fullName',
    },
    tabsConfig: {
      tabs: [
        {
          value: '*',
          label: 'All',
          counter: metrics?.total,
          rightSection: <Loader size="xs" />,
        },
        {
          value: 'active',
          label: 'Active',
          color: 'teal',
          counter: metrics?.active,
          rightSection: <Loader size="xs" color="teal" />,
        },
        {
          value: 'banned',
          label: 'Banned',
          color: 'orange',
          counter: metrics?.banned,
          rightSection: <Loader size="xs" color="teal" />,
        },
        {
          value: 'archived',
          label: 'Archived',
          color: 'red',
          counter: metrics?.archived,
          rightSection: <Loader size="xs" color="teal" />,
        },
      ],
    },
  });

  const { data, isLoading } = useGetCustomers({
    query: {
      page,
      limit,
      status: tabs.value as Customer['status'],
      sort: sort.query,
    },
  });

  const columns: DataTableColumn<Customer>[] = useMemo(
    () => [
      {
        accessor: 'number',
        title: 'Customer n°',
        width: 156,
        render: (customer) => (
          <LinkChip href={paths.dashboard.management.customers.view(customer.id)}>
            {customer.number}
          </LinkChip>
        ),
      },
      {
        accessor: 'fullName',
        title: 'Name',
        sortable: true,
        render: (customer) => (
          <Group wrap="nowrap">
            <Avatar src={customer.avatarUrl} alt={customer.displayName}>
              {firstLetters(customer.displayName)}
            </Avatar>
            <Box w="16rem">
              <Text truncate="end">{customer.fullName}</Text>
              <Text size="sm" c="dimmed" truncate="end">
                {customer.email}
              </Text>
            </Box>
          </Group>
        ),
      },
      {
        accessor: 'phoneNumber',
        title: 'Phone number',
        noWrap: true,
        width: 180,
        render: (customer) => formatPhoneNumber(customer.phoneNumber),
      },
      {
        accessor: 'rating',
        title: 'Rating',
        width: 160,
        sortable: true,
        render: (customer) => <Rating value={customer.rating} fractions={2} readOnly />,
      },
      {
        accessor: 'status',
        title: 'Status',
        width: 120,
        render: (customer) => <CustomerStatusBadge status={customer.status} w="100%" />,
      },
      {
        accessor: 'createdAt',
        title: 'Created at',
        noWrap: true,
        width: 140,
        sortable: true,
        render: (customer) => formatDate(customer.createdAt),
      },
      {
        accessor: 'updatedAt',
        title: 'Updated at',
        noWrap: true,
        width: 140,
        render: (customer) => formatDate(customer.updatedAt),
      },
      {
        accessor: 'actions',
        title: 'Actions',
        textAlign: 'right',
        width: 100,
        render: () => (
          <DataTable.Actions onView={console.log} onEdit={console.log} onDelete={console.log} />
        ),
      },
    ],
    []
  );

  return (
    <DataTable.Container>
      <DataTable.Title
        title="Customers"
        description="List of all customers"
        actions={
          <AddButton variant="default" size="xs">
            Add new customer
          </AddButton>
        }
      />
      <DataTable.Tabs tabs={tabs.tabs} onChange={tabs.change} />
      <DataTable.Filters filters={filters.filters} onClear={filters.clear} />
      <DataTable.Content>
        <DataTable.Table
          minHeight={240}
          noRecordsText={DataTable.noRecordsText('customer')}
          recordsPerPageLabel={DataTable.recordsPerPageLabel('customers')}
          paginationText={DataTable.paginationText('customers')}
          page={page}
          records={data?.data ?? []}
          fetching={isLoading}
          onPageChange={setPage}
          recordsPerPage={limit}
          totalRecords={data?.meta.total ?? 0}
          onRecordsPerPageChange={setLimit}
          recordsPerPageOptions={[5, 15, 30]}
          sortStatus={sort.status}
          onSortStatusChange={sort.change}
          columns={columns}
        />
      </DataTable.Content>
    </DataTable.Container>
  );
}
