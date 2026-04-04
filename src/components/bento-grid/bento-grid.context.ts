import { createSafeContext, type GetStylesApi } from "@mantine/core";

import type { BentoGridFactory } from "./bento-grid";

interface BentoGridContextValue {
  getStyles: GetStylesApi<BentoGridFactory>;
}

export const [BentoGridProvider, useBentoGridContext] = createSafeContext<BentoGridContextValue>(
  "BentoGrid component was not found in tree"
);
