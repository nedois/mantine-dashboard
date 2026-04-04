import {
  Box,
  type BoxProps,
  type ElementProps,
  factory,
  type Factory,
  type MantineSpacing,
  type StyleProp,
  type StylesApiProps,
  useProps,
  useStyles,
} from "@mantine/core";
import { useId } from "react";

import { BentoGridItem, type BentoGridItemStylesNames } from "./bento-grid-item";
import { BentoGridVariables } from "./bento-grid-variables";
import { BentoGridProvider } from "./bento-grid.context";

import classes from "./bento-grid.module.css";

export type BentoGridStylesNames = "root" | BentoGridItemStylesNames;

export interface BentoGridProps extends BoxProps, StylesApiProps<BentoGridFactory>, ElementProps<"div"> {
  /** Number of grid columns, supports responsive object, @default 4 */
  columns?: StyleProp<number>;
  /** Gap between grid items, key of `theme.spacing` or any valid CSS value, supports responsive object, @default 'md' */
  gap?: StyleProp<MantineSpacing>;
}

export type BentoGridFactory = Factory<{
  props: BentoGridProps;
  ref: HTMLDivElement;
  stylesNames: BentoGridStylesNames;
  staticComponents: {
    Item: typeof BentoGridItem;
  };
}>;

const defaultProps = {
  columns: 4,
  gap: "md",
} satisfies Partial<BentoGridProps>;

export const BentoGrid = factory<BentoGridFactory>((_props) => {
  const props = useProps("BentoGrid", defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, attributes, columns, gap, children, ...others } = props;

  const getStyles = useStyles<BentoGridFactory>({
    name: "BentoGrid",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    attributes,
  });

  const responsiveClassName = `__bg__-${useId().replace(/[:«»]/g, "")}`;

  return (
    <BentoGridProvider value={{ getStyles }}>
      <BentoGridVariables columns={columns} gap={gap} selector={`.${responsiveClassName}`} />
      <Box {...getStyles("root", { className: responsiveClassName })} {...others}>
        {children}
      </Box>
    </BentoGridProvider>
  );
});

BentoGrid.displayName = "BentoGrid";
BentoGrid.classes = classes;
BentoGrid.Item = BentoGridItem;
