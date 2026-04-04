import { alpha, parseThemeColor, RingProgress, type RingProgressProps, Text, useMantineTheme } from "@mantine/core";
import type { ReactNode } from "react";

type ProgressRingProps = RingProgressProps;

export function ProgressRing({ label, rootColor, sections, ...props }: ProgressRingProps) {
  const theme = useMantineTheme();
  const parsedColor = parseThemeColor({ color: sections[0]?.color, theme });
  const fallbackRootColor = alpha(parsedColor.value, 0.1);

  return (
    <RingProgress
      label={<Label label={label} />}
      rootColor={rootColor ?? fallbackRootColor}
      sections={sections}
      {...props}
    />
  );
}

function Label({ label }: Pick<ProgressRingProps, "label">): ReactNode {
  const isTextLabel = ["number", "string"].includes(typeof label);

  if (isTextLabel) {
    return (
      <Text fw="bold" ta="center">
        {label}
      </Text>
    );
  }

  return label;
}
