import { Switch, type SwitchProps } from "@mantine/core";

import { Icon } from "./icon";

export function CheckCrossSwitch({ checked, color = "teal", size = "md", ...props }: SwitchProps) {
  return (
    <Switch
      {...props}
      checked={checked}
      color={color}
      size={size}
      thumbIcon={
        checked ? <Icon c="teal.6" h="0.5rem" icon="ph:check-bold" /> : <Icon c="red.6" h="0.5rem" icon="ph:x-bold" />
      }
    />
  );
}
