import {
  alpha,
  getPrimaryShade,
  type CSSVariablesResolver,
  type MantineColorScheme,
  type MantineTheme,
} from "@mantine/core";

function getCSSColorVariables(
  theme: MantineTheme,
  color: string,
  colorScheme: MantineColorScheme
): Record<string, string> {
  const primaryShade = getPrimaryShade(theme, colorScheme);
  const colors = theme.colors[color];

  const shadesVariables = colors.reduce(
    (acc, color, index) => ({ ...acc, [`--mantine-color-${color}-${index}`]: color }),
    {} as Record<string, string>
  );

  const dynamicVariables = {
    [`--mantine-color-${color}-text`]: `var(--mantine-color-${color}-filled)`,
    [`--mantine-color-${color}-filled`]: `var(--mantine-color-${color}-${primaryShade})`,
    [`--mantine-color-${color}-filled-hover`]: alpha(`var(--mantine-color-${color}-filled)`, 0.9),
    [`--mantine-color-${color}-light`]: alpha(`var(--mantine-color-${color}-filled)`, 0.05),
    [`--mantine-color-${color}-light-hover`]: alpha(`var(--mantine-color-${color}-filled)`, 0.1),
    [`--mantine-color-${color}-light-color`]: `var(--mantine-color-${color}-filled)`,
    [`--mantine-color-${color}-outline`]: `var(--mantine-color-${color}-filled)`,
    [`--mantine-color-${color}-outline-hover`]: alpha(`var(--mantine-color-${color}-filled)`, 0.1),
    [`--mantine-color-${color}-contrast`]: `var(--mantine-color-${color}-0)`,
  };

  return { ...shadesVariables, ...dynamicVariables };
}

export const cssVariableResolver: CSSVariablesResolver = (theme) => {
  const variables = {
    variables: {},
    light: Object.assign(
      {
        "--mantine-color-text": "var(--mantine-color-secondary-9)",
        "--mantine-color-body": "var(--mantine-color-white)",
        "--mantine-color-error": "var(--mantine-color-error-9)",
        "--mantine-color-placeholder": "var(--mantine-color-secondary-9)",
        "--mantine-color-anchor": "var(--mantine-color-primary-filled)",

        "--mantine-color-default": "var(--mantine-color-secondary-0)",
        "--mantine-color-default-hover": "var(--mantine-color-secondary-1)",
        "--mantine-color-default-color": "var(--mantine-color-secondary-9)",
        "--mantine-color-default-border": "var(--mantine-color-secondary-2)",
        "--mantine-color-dimmed": "var(--mantine-color-secondary-9)",
      },
      ...Object.keys(theme.colors).map((color) => getCSSColorVariables(theme, color, "light"))
    ),
    dark: Object.assign(
      {
        "--mantine-color-text": "var(--mantine-color-secondary-0)",
        "--mantine-color-body": "var(--mantine-color-secondary-9)",
        "--mantine-color-error": "var(--mantine-color-error-9)",
        "--mantine-color-placeholder": "var(--mantine-color-secondary-4)",
        "--mantine-color-anchor": "var(--mantine-color-primary-filled)",

        "--mantine-color-default": "var(--mantine-color-secondary-9)",
        "--mantine-color-default-hover": "var(--mantine-color-secondary-7)",
        "--mantine-color-default-color": "var(--mantine-color-secondary-1)",
        "--mantine-color-default-border": "var(--mantine-color-secondary-7)",
        "--mantine-color-dimmed": "var(--mantine-color-secondary-4)",
      },
      ...Object.keys(theme.colors).map((color) => getCSSColorVariables(theme, color, "dark"))
    ),
  };

  return variables;
};
