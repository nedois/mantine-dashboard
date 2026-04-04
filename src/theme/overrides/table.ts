import { type MantineThemeOverride, Table } from "@mantine/core";

export default {
  Table: Table.extend({
    defaultProps: {
      highlightOnHover: true,
    },
  }),
} as MantineThemeOverride["components"];
