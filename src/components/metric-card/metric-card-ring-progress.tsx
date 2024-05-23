import { RingProgress, RingProgressProps, ElementProps, Text, TextProps } from '@mantine/core';

interface MetricRingProgressProps
  extends Omit<RingProgressProps, 'label'>,
    ElementProps<'div', keyof RingProgressProps> {
  label?: string;
  labelProps?: Omit<TextProps, 'ta' | 'fw'>;
}

export function MetricCardRingProgress({ label, labelProps, ...props }: MetricRingProgressProps) {
  return (
    <RingProgress
      label={
        <Text fw={700} ta="center" {...labelProps}>
          {label}
        </Text>
      }
      {...props}
    />
  );
}
