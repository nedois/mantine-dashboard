import { createTheme } from "@mantine/core";

import breakpoints from "./breakpoints";
import colors from "./colors";
import overrides from "./overrides";
import radius from "./radius";
import shadows from "./shadows";
import spacing from "./spacing";
import typography from "./typography";

export const theme = createTheme({
  ...breakpoints,
  ...colors,
  ...overrides,
  ...radius,
  ...shadows,
  ...spacing,
  ...typography,

  cursorType: "pointer",
});
