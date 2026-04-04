import { Button, type ButtonProps, type ElementProps } from "@mantine/core";
import { Icon } from "./icon";

export type AddButtonProps = ElementProps<"button", keyof ButtonProps> & Omit<ButtonProps, "leftSection">;

export function AddButton(props: AddButtonProps) {
  return <Button {...props} leftSection={<Icon icon="lucide:plus" w="1rem" />} />;
}
