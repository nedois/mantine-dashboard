import { Icon as IconifyIcon, type IconifyIcon as IconifyIconData, type IconifyRenderMode } from "@iconify/react";
import { Box, type BoxProps, factory, type Factory, type StylesApiProps, useProps, useStyles } from "@mantine/core";

import classes from "./icon.module.css";

export type IconStylesNames = "root";

export interface IconProps extends BoxProps, StylesApiProps<IconFactory> {
  /** Icon name (e.g. "lucide:arrow-right") or an IconifyIcon data object */
  icon: IconifyIconData | string;
  /** Icon width */
  width?: string | number;
  /** Icon height */
  height?: string | number;
  /** Rotation: number (quarter turns) or string with units ("90deg") */
  rotate?: string | number;
  /** Flip direction: "horizontal", "vertical", or "horizontal,vertical" */
  flip?: string;
  /** SVG rendering mode */
  mode?: IconifyRenderMode;
  /** Whether the icon should be displayed inline */
  inline?: boolean;
}

export type IconFactory = Factory<{
  props: IconProps;
  ref: SVGSVGElement;
  stylesNames: IconStylesNames;
}>;

const defaultProps = {} satisfies Partial<IconProps>;

export const Icon = factory<IconFactory>((_props) => {
  const props = useProps("Icon", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    icon,
    width,
    height,
    rotate,
    flip,
    mode,
    inline,
    ...others
  } = props;

  const getStyles = useStyles<IconFactory>({
    name: "Icon",
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

  return (
    <Box<typeof IconifyIcon>
      component={IconifyIcon}
      icon={icon}
      width={width}
      height={height}
      rotate={rotate as number}
      flip={flip}
      mode={mode}
      inline={inline}
      {...getStyles("root")}
      {...others}
    />
  );
});

Icon.displayName = "Icon";
Icon.classes = classes;
