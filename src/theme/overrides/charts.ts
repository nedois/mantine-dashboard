import { AreaChart, BarChart, LineChart } from "@mantine/charts";
import type { MantineThemeOverride } from "@mantine/core";

const defaultConfigs = {
  curveType: "natural",
  dotProps: {
    fill: "var(--mantine-color-body)",
    r: 3,
    strokeWidth: 2,
  },
  gridAxis: "none",
  legendProps: {
    verticalAlign: "bottom",
  },
  tickLine: "none",
  withDots: false,
  withTooltip: false,
  withXAxis: false,
  withYAxis: false,
} as const;

export default {
  AreaChart: AreaChart.extend({
    defaultProps: {
      ...defaultConfigs,
      areaProps: {
        isAnimationActive: true,
      },
    },
  }),
  BarChart: BarChart.extend({
    defaultProps: {
      barProps: {
        isAnimationActive: true,
        radius: 8,
      },
    },
  }),
  LineChart: LineChart.extend({
    defaultProps: {
      ...defaultConfigs,
      lineProps: {
        isAnimationActive: true,
      },
    },
  }),
} as MantineThemeOverride["components"];
