import { Chip, type ChipProps } from "@mantine/core";
import type { RefObject } from "react";

import { RouterLink } from "./router-link";

export interface ChipLinkProps extends Omit<ChipProps, "checked" | "wrapperProps"> {
  href?: string;
  ref?: RefObject<HTMLInputElement>;
}

export function ChipLink({ href, ref, ...props }: ChipLinkProps) {
  return <Chip {...props} {...(href ? { component: RouterLink, ref, to: href } : { ref })} checked={false} />;
}
