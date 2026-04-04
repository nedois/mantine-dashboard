import {
  filterProps,
  getBaseValue,
  getSpacing,
  getSortedBreakpoints,
  InlineStyles,
  keys,
  type MantineSpacing,
  type StyleProp,
  useMantineTheme,
} from "@mantine/core";
import type { CSSProperties } from "react";

interface BentoGridVariablesProps {
  selector: string;
  columns?: StyleProp<number>;
  gap?: StyleProp<MantineSpacing>;
}

export function BentoGridVariables({ columns, gap, selector }: BentoGridVariablesProps) {
  const theme = useMantineTheme();

  const baseStyles = filterProps({
    "--bg-columns": getBaseValue(columns)?.toString(),
    "--bg-gap": getSpacing(getBaseValue(gap)),
  });

  const queries = keys(theme.breakpoints).reduce<Record<string, Record<string, string | undefined>>>(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof columns === "object" && columns[breakpoint] !== undefined) {
        acc[breakpoint]["--bg-columns"] = columns[breakpoint]?.toString();
      }
      if (typeof gap === "object" && gap[breakpoint] !== undefined) {
        acc[breakpoint]["--bg-gap"] = getSpacing(gap[breakpoint]);
      }
      return acc;
    },
    {}
  );

  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme.breakpoints).filter(
    (bp) => keys(queries[bp.value]).length > 0
  );

  return (
    <InlineStyles
      styles={baseStyles as CSSProperties}
      media={sortedBreakpoints.map((bp) => ({
        query: `(min-width: ${theme.breakpoints[bp.value]})`,
        styles: queries[bp.value],
      }))}
      selector={selector}
    />
  );
}

interface BentoGridItemVariablesProps {
  selector: string;
  colSpan?: StyleProp<number>;
  rowSpan?: StyleProp<number>;
}

export function BentoGridItemVariables({ colSpan, rowSpan, selector }: BentoGridItemVariablesProps) {
  const theme = useMantineTheme();

  const baseStyles = filterProps({
    "--bgi-col-span": getBaseValue(colSpan)?.toString(),
    "--bgi-row-span": getBaseValue(rowSpan)?.toString(),
  });

  const queries = keys(theme.breakpoints).reduce<Record<string, Record<string, string | undefined>>>(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof colSpan === "object" && colSpan[breakpoint] !== undefined) {
        acc[breakpoint]["--bgi-col-span"] = colSpan[breakpoint]?.toString();
      }
      if (typeof rowSpan === "object" && rowSpan[breakpoint] !== undefined) {
        acc[breakpoint]["--bgi-row-span"] = rowSpan[breakpoint]?.toString();
      }
      return acc;
    },
    {}
  );

  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme.breakpoints).filter(
    (bp) => keys(queries[bp.value]).length > 0
  );

  return (
    <InlineStyles
      styles={baseStyles as CSSProperties}
      media={sortedBreakpoints.map((bp) => ({
        query: `(min-width: ${theme.breakpoints[bp.value]})`,
        styles: queries[bp.value],
      }))}
      selector={selector}
    />
  );
}
