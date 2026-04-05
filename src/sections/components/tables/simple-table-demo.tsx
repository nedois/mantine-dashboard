import { useQuery } from "@tanstack/react-query";

import { getAtomsQueryOptions } from "#/api/options";
import { TableContainer, DataTable } from "#/components";

export function SimpleTableDemo() {
  const { data, isLoading } = useQuery(getAtomsQueryOptions());

  return (
    <TableContainer title="Common atoms" description="Some random atomic elements.">
      <DataTable fetching={isLoading} records={data}>
        <DataTable.Column accessor="number" title="Atomic number" />
        <DataTable.Column accessor="name" title="Name" />
        <DataTable.Column accessor="symbol" title="Symbol" />
        <DataTable.Column accessor="mass" title="Atomic Mass" />
      </DataTable>
    </TableContainer>
  );
}
