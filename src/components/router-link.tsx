import type { JSX } from "react";

import { Anchor, type AnchorProps } from "@mantine/core";
import { createLink, type LinkComponent } from "@tanstack/react-router";

type MantineAnchorProps = Omit<AnchorProps, "href">;

function MantineLinkComponent(props: MantineAnchorProps): JSX.Element {
  return <Anchor {...props} />;
}

const Link = createLink(MantineLinkComponent);

export const RouterLink: LinkComponent<typeof MantineLinkComponent> = (props) => {
  return <Link preload="intent" {...props} />;
};
