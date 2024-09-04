import { Group, Table } from '@mantine/core';
import { AddButton } from '@/components/add-button';
import { ExportButton } from '@/components/export-button';
import { TableContainer } from '@/components/table-container';
import { useGetAtoms } from '@/hooks';

export function SimpleTable() {
  const { data = [] } = useGetAtoms();

  return (
    <TableContainer
      title="Common atoms"
      description="Some random atomic elements."
      actions={
        <Group>
          <AddButton variant="default" size="xs">
            Add
          </AddButton>
          <ExportButton variant="default" size="xs">
            Export
          </ExportButton>
        </Group>
      }
    >
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Atomic number</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row) => (
            <Table.Tr key={row.id}>
              <Table.Td>{row.number}</Table.Td>
              <Table.Td>{row.name}</Table.Td>
              <Table.Td>{row.symbol}</Table.Td>
              <Table.Td>{row.mass}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </TableContainer>
  );
}
