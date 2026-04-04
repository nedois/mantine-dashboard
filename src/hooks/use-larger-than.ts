import { type MantineBreakpoint, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function useLargerThan(breakpoint: MantineBreakpoint): boolean {
  const theme = useMantineTheme();

  const key = Object.keys(theme.breakpoints).includes(breakpoint) ? theme.breakpoints[breakpoint] : breakpoint;
  const matches = useMediaQuery(`(min-width: ${key})`);

  return matches;
}
