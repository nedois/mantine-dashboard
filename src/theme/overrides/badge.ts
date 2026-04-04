import { Badge, type BadgeVariant, type MantineThemeOverride } from "@mantine/core";
import { match } from "ts-pattern";

import classNames from "./badge.module.css";

type ExtendedBadgeVariant = "ghost" | "glow" | "dashed" | BadgeVariant;

declare module "@mantine/core" {
  export interface BadgeProps {
    variant?: ExtendedBadgeVariant;
  }
}

export default {
  Badge: Badge.extend({
    classNames,
    vars: (theme, props) => {
      return match(props.variant)
        .with("dashed", () => {
          const color = props.color ?? theme.primaryColor;
          const parsed = theme.variantColorResolver({ color, theme, variant: "outline" });

          return {
            root: {
              "--badge-bd": `1px dashed ${parsed.color}`,
              "--badge-bg": parsed.background,
              "--badge-color": parsed.color,
            },
          };
        })
        .otherwise(() => ({ root: {} }));
    },
  }),
} as MantineThemeOverride["components"];
