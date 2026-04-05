import { Badge, TextInput } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { getRichestCompaniesQueryOptions } from "#/api/options";
import type { Company } from "#/api/schemas";
import { TableContainer, DataTable, getRowNumber, AddButton } from "#/components";
import { useDataTablePagination, useDataTableSort } from "#/hooks";

export function AdvancedDataTableDemo() {
  const pagination = useDataTablePagination();
  const sort = useDataTableSort();

  const { data, isLoading } = useQuery(
    getRichestCompaniesQueryOptions({
      page: pagination.page,
      perPage: pagination.perPage,
      sort: sort.query,
    })
  );

  return (
    <TableContainer
      title="Biggest companies"
      description="Top 100 companies in the world"
      actions={
        <AddButton variant="default" size="xs">
          Add Company
        </AddButton>
      }
    >
      <DataTable
        height="20rem"
        fetching={isLoading}
        records={data?.data}
        sortStatus={sort.status}
        onSortStatusChange={sort.setStatus}
      >
        <DataTable.Column
          accessor="#"
          title="#"
          width={50}
          render={(_, index) => getRowNumber(index, pagination.perPage, pagination.page)}
        />
        <DataTable.Column
          accessor="name"
          title="Name"
          noWrap
          sortable
          filtering
          filter={<TextInput placeholder="Search by name" />}
        />
        <DataTable.Column accessor="address" title="Address" noWrap />
        <DataTable.Column accessor="city" title="City" noWrap sortable />
        <DataTable.Column accessor="state" title="State" noWrap />
        <DataTable.Column
          accessor="isActive"
          title="Active"
          width={100}
          render={(company: Company) => (
            <Badge variant="light" color={company.isActive ? "green" : "red"}>
              {company.isActive ? "Active" : "Inactive"}
            </Badge>
          )}
        />

        <DataTable.Pagination
          page={pagination.page}
          onPageChange={pagination.setPage}
          recordsPerPage={pagination.perPage}
          onRecordsPerPageChange={pagination.setPerPage}
          totalRecords={data?.metadata.total ?? 0}
          recordsPerPageOptions={[5, 25, 50, 100]}
          recordsPerPageLabel="Companies per page"
        />
      </DataTable>
    </TableContainer>
  );
}
