import { ActionIcon, Button, type ButtonVariant, type MantineThemeOverride } from "@mantine/core";
import { match } from "ts-pattern";

import actionIconClassNames from "./action-icon.module.css";
import buttonClassNames from "./button.module.css";

type ExtendedButtonVariant = "dashed" | ButtonVariant;

declare module "@mantine/core" {
  export interface ButtonProps {
    variant?: ExtendedButtonVariant;
  }
}

export default {
  ActionIcon: ActionIcon.extend({
    classNames: actionIconClassNames,
    defaultProps: {
      variant: "subtle",
    },
  }),

  Button: Button.extend({
    classNames: buttonClassNames,
    vars: (theme, props) => {
      return match(props.variant)
        .with("dashed", () => {
          const color = props.color ?? theme.primaryColor;
          const parsed = theme.variantColorResolver({ color, theme, variant: "outline" });

          return {
            root: {
              "--button-bg": parsed.background,
              "--button-hover": parsed.hover,
              "--button-color": parsed.color,
              "--button-bd": `1px dashed ${parsed.color}`,
              "--button-hover-color": parsed.hoverColor,
            },
          };
        })
        .otherwise(() => ({ root: {} }));
    },
  }),
} as MantineThemeOverride["components"];
