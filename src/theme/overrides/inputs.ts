import { Checkbox, Fieldset, Input, type MantineThemeOverride, NumberInput } from "@mantine/core";

import checkboxClassNames from "./checkbox.module.css";
import fieldsetClassNames from "./fieldset.module.css";
import inputClassNames from "./input.module.css";

export default {
  Checkbox: Checkbox.extend({
    classNames: checkboxClassNames,
    vars: (theme, props) => {
      const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined;
      return {
        root: {
          "--checkbox-color": colorKey
            ? `var(--mantine-color-${colorKey}-filled)`
            : "var(--mantine-primary-color-filled)",
          "--checkbox-icon-color": colorKey
            ? `var(--mantine-color-${colorKey}-contrast)`
            : "var(--mantine-primary-color-contrast)",
        },
      };
    },
  }),
  Fieldset: Fieldset.extend({
    classNames: fieldsetClassNames,
    defaultProps: {
      variant: "unstyled",
    },
  }),
  Input: Input.extend({
    classNames: inputClassNames,
  }),
  NumberInput: NumberInput.extend({
    defaultProps: {
      decimalSeparator: ",",
      thousandSeparator: " ",
    },
  }),
} as MantineThemeOverride["components"];
