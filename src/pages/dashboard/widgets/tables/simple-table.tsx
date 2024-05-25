import { Group, Table } from '@mantine/core';

import { TableContainer } from '@/components/table-container';
import { ExportButton } from '@/components/export-button';
import { AddButton } from '@/components/add-button';

const data = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

export function SimpleTable() {
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
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row) => (
            <Table.Tr key={row.name}>
              <Table.Td>{row.position}</Table.Td>
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