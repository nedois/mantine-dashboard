import { ActionIcon, type ActionIconProps } from "@mantine/core";
import type { RefObject } from "react";

import { Icon } from "./icon";

export interface MenuActionIconProps extends Omit<ActionIconProps, "children" | "leftSection"> {
  ref?: RefObject<HTMLButtonElement | null>;
}

export function MenuActionIcon(props: MenuActionIconProps) {
  return (
    <ActionIcon {...props}>
      <Icon h="80%" icon="ph:dots-three-outline" />
    </ActionIcon>
  );
}
