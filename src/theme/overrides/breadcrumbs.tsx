import { Breadcrumbs, type MantineThemeOverride } from "@mantine/core";

import { Icon } from "../../components/icon";

export default {
  Breadcrumbs: Breadcrumbs.extend({
    defaultProps: {
      separator: <Icon c="dimmed" height="0.5rem" icon="octicon:dot-fill-24" opacity={0.4} />,
    },
  }),
} as MantineThemeOverride["components"];
