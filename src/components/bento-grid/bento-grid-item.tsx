import {
  Box,
  type BoxProps,
  type CompoundStylesApiProps,
  type ElementProps,
  factory,
  type Factory,
  type StyleProp,
  useProps,
} from "@mantine/core";
import { useId } from "react";

import { BentoGridItemVariables } from "./bento-grid-variables";
import { useBentoGridContext } from "./bento-grid.context";

export type BentoGridItemStylesNames = "item";

export interface BentoGridItemProps
  extends BoxProps, CompoundStylesApiProps<BentoGridItemFactory>, ElementProps<"div"> {
  colSpan?: StyleProp<number>;
  rowSpan?: StyleProp<number>;
}

export type BentoGridItemFactory = Factory<{
  props: BentoGridItemProps;
  ref: HTMLDivElement;
  stylesNames: BentoGridItemStylesNames;
  compound: true;
}>;

const defaultProps = {} satisfies Partial<BentoGridItemProps>;

export const BentoGridItem = factory<BentoGridItemFactory>((_props) => {
  const props = useProps("BentoGridItem", defaultProps, _props);
  const { className, style, classNames, styles, colSpan, rowSpan, children, ...others } = props;

  const { getStyles } = useBentoGridContext();
  const responsiveClassName = `__bg__-${useId().replace(/[:«»]/g, "")}`;

  return (
    <>
      <BentoGridItemVariables colSpan={colSpan} rowSpan={rowSpan} selector={`.${responsiveClassName}`} />
      <Box
        {...getStyles("item", {
          className: `${responsiveClassName}${className ? ` ${className}` : ""}`,
          style,
          classNames,
          styles,
        })}
        {...others}
      >
        {children}
      </Box>
    </>
  );
});

BentoGridItem.displayName = "BentoGrid.Item";
