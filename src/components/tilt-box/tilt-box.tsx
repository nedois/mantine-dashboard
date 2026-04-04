import {
  Box,
  type BoxProps,
  createVarsResolver,
  type ElementProps,
  factory,
  type Factory,
  getRadius,
  type MantineRadius,
  type StylesApiProps,
  useProps,
  useStyles,
} from "@mantine/core";
import { animate, type MotionStyle, motion, useMotionValue, useTransform } from "motion/react";
import { useCallback, useState } from "react";

import classes from "./tilt-box.module.css";

export type TiltBoxStylesNames = "root" | "inner";

export type TiltBoxCssVariables = {
  root: "--tc-perspective" | "--tc-radius";
};

export interface TiltBoxProps extends BoxProps, StylesApiProps<TiltBoxFactory>, ElementProps<"div"> {
  /** Maximum tilt rotation in degrees, @default 4 */
  maxTilt?: number;
  /** Perspective distance in px, @default 800 */
  perspective?: number;
  /** Border radius from theme or CSS value, @default 'md' */
  radius?: MantineRadius;
  /** Duration (in seconds) for the reset animation on mouse leave, @default 0.4 */
  resetDuration?: number;
}

export type TiltBoxFactory = Factory<{
  props: TiltBoxProps;
  ref: HTMLDivElement;
  stylesNames: TiltBoxStylesNames;
  vars: TiltBoxCssVariables;
}>;

const defaultProps = {
  maxTilt: 4,
  perspective: 800,
  radius: "md",
  resetDuration: 0.4,
} satisfies Partial<TiltBoxProps>;

const varsResolver = createVarsResolver<TiltBoxFactory>((_theme, { perspective, radius }) => ({
  root: {
    "--tc-perspective": `${perspective}px`,
    "--tc-radius": getRadius(radius),
  },
}));

export const TiltBox = factory<TiltBoxFactory>((_props) => {
  const props = useProps("TiltBox", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    radius,
    maxTilt,
    perspective,
    resetDuration,
    children,
    ...others
  } = props;

  const getStyles = useStyles<TiltBoxFactory>({
    name: "TiltBox",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    attributes,
    varsResolver,
  });

  const [hover, setHover] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const tilt = maxTilt!;
  const rotateX = useTransform(mouseY, [0, 1], [tilt, -tilt]);
  const rotateY = useTransform(mouseX, [0, 1], [-tilt, tilt]);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  const handleEnter = useCallback(() => setHover(true), []);

  const handleLeave = useCallback(() => {
    setHover(false);
    animate(mouseX, 0.5, { duration: resetDuration });
    animate(mouseY, 0.5, { duration: resetDuration });
  }, [mouseX, mouseY, resetDuration]);

  const innerStyle: MotionStyle = {
    rotateX: hover ? rotateX : 0,
    rotateY: hover ? rotateY : 0,
  };

  return (
    <Box
      {...getStyles("root")}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...others}
    >
      <Box<typeof motion.div>
        component={motion.div}
        {...getStyles("inner", { style: innerStyle as React.CSSProperties })}
      >
        {children}
      </Box>
    </Box>
  );
});

TiltBox.displayName = "TiltBox";
TiltBox.classes = classes;
