import { Badge, MultiSelect, Radio, Stack, TextInput } from '@mantine/core';

import { DataTable } from '@/components/data-table';
import { ExportButton } from '@/components/export-button';

const data = [
  {
    id: '1323addd-a4ac-4dd2-8de2-6f934969a0f1',
    name: 'Feest, Bogan and Herzog',
    streetAddress: '21716 Ratke Drive',
    city: 'Stromanport',
    state: 'WY',
    missionStatement: 'Innovate bricks-and-clicks metrics.',
    active: false,
  },
  {
    id: '0cf96f1c-62c9-4e3f-97b0-4a2e8fa2bf6b',
    name: 'Cummerata - Kuhlman',
    streetAddress: '6389 Dicki Stream',
    city: 'South Gate',
    state: 'NH',
    missionStatement: 'Harness real-time channels.',
    active: true,
  },
  {
    id: 'bba53ee9-385f-4b3d-a9a4-613ced38ff2c',
    name: 'Goyette Inc',
    streetAddress: '8873 Mertz Rapid',
    city: 'Dorthyside',
    state: 'ID',
    missionStatement: 'Productize front-end web services.',
    active: false,
  },
  {
    id: '3d80d34a-4aff-468a-b4e5-e17658f7635e',
    name: 'Runte Inc',
    streetAddress: '2996 Ronny Mount',
    city: 'McAllen',
    state: 'MA',
    missionStatement: 'Engage synergistic infrastructures.',
    active: true,
  },
  {
    id: '3ae22e52-335e-4e49-9e26-f5e0089edb76',
    name: 'Goldner, Rohan and Lehner',
    streetAddress: '632 Broadway Avenue',
    city: 'North Louie',
    state: 'WY',
    missionStatement: 'Incubate cross-platform metrics.',
    active: false,
  },
  {
    id: '6e9372ad-6b30-40c1-bd05-30211cd00ed2',
    name: "Doyle, Hodkiewicz and O'Connell",
    streetAddress: '576 Joyce Ways',
    city: 'Tyraburgh',
    state: 'KS',
    missionStatement: 'Scale web-enabled e-business.',
    active: true,
  },
  {
    id: '2d0ddea1-ee92-477e-8d63-6d0508749ae6',
    name: "Rau - O'Hara",
    streetAddress: '7508 Lansdowne Road',
    city: 'Shieldsborough',
    state: 'MI',
    missionStatement: 'Innovate real-time applications.',
    active: true,
  },
  {
    id: '1c509c99-109e-4f2c-bc76-03c23b839222',
    name: 'Tillman - Jacobi',
    streetAddress: '57918 Gwendolyn Circles',
    city: 'Sheridanport',
    state: 'MI',
    missionStatement: 'Matrix viral synergies.',
    active: true,
  },
  {
    id: '74207e6f-91a7-49a3-8eb4-b0c95cda3105',
    name: 'Connelly, Feest and Hodkiewicz',
    streetAddress: '7057 Stanley Road',
    city: 'Kearaburgh',
    state: 'CA',
    missionStatement: 'Maximize dynamic e-commerce.',
    active: true,
  },
  {
    id: '3fdba2fc-2347-464b-b29a-3ef8f03ccf56',
    name: 'Shanahan, Robel and Beier',
    streetAddress: '378 Berta Crescent',
    city: 'West Gerry',
    state: 'KS',
    missionStatement: 'Synthesize customized portals.',
    active: true,
  },
];

const uniqueStatesOptions = Array.from(new Set(data.map((company) => company.state)));

export function AdvancedDataTable() {
  const { tabs, filters } = DataTable.useDataTable({
    tabsConfig: {
      tabs: [
        { value: 'all', label: 'All', counter: 120 },
        { value: 'pending', label: 'Pending', color: 'orange', counter: 10 },
        { value: 'cancelled', label: 'Cancelled', color: 'gray', disabled: true },
        { value: 'deleted', label: 'Deleted', counter: 0, color: 'red' },
      ],
    },
  });

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

      <DataTable.Content
        page={1}
        recordsPerPage={10}
        recordsPerPageOptions={[5, 10, 30]}
        totalRecords={100}
        records={data}
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
          { accessor: 'streetAddress' },
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
            render: (row) => (
              <Badge w="100%" size="sm" variant="outline" color={row.active ? 'teal' : 'red'}>
                {row.active ? 'Active' : 'Inactive'}
              </Badge>
            ),
          },
        ]}
      />
    </DataTable.Container>
  );
}
