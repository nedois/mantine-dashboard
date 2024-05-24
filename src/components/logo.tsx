import { Box, BoxProps, ElementProps } from '@mantine/core';

interface LogoProps
  extends Omit<BoxProps, 'children' | 'ref'>,
    ElementProps<'svg', keyof BoxProps> {
  size?: string | number;
}

export function Logo({ size, style, ...props }: LogoProps) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: size, height: size, ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        opacity=".5"
        d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
      />
      <path d="M7 17l0 .01" />
      <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M7 7l0 .01" />
      <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M17 7l0 .01" opacity=".5" />
      <path d="M14 14l3 0" opacity=".5" />
      <path d="M20 14l0 .01" opacity=".5" />
      <path d="M14 14l0 3" opacity=".5" />
      <path d="M14 20l3 0" opacity=".5" />
      <path d="M17 17l3 0" opacity=".5" />
      <path d="M20 17l0 3" opacity=".5" />
    </Box>
  );
}
