import { type MantineSpacingValues, px, useMantineTheme } from "@mantine/core";

export function useSpacing<T extends Extract<keyof MantineSpacingValues, string>>(value: T) {
  const theme = useMantineTheme();
  const resolvedValue = px(theme.spacing[value]);
  return Number(resolvedValue);
}
