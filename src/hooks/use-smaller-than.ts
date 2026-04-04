import { type MantineBreakpoint, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function useSmallerThan(breakpoint: MantineBreakpoint): boolean {
  const theme = useMantineTheme();

  const key = Object.keys(theme.breakpoints).includes(breakpoint) ? theme.breakpoints[breakpoint] : breakpoint;
  const matches = useMediaQuery(`(max-width: ${key})`);

  return matches;
}
