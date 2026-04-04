import { Badge, Group, type GroupProps, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";

import { env } from "#/config";

interface LogoProps extends Omit<GroupProps, "align" | "gap" | "wrap"> {
  href?: string;
  iconOnly?: boolean;
}

export function Logo({ href, iconOnly, ...props }: LogoProps) {
  const logo = (
    <Group align="center" gap="xs" wrap="nowrap" {...props}>
      <svg
        fill="none"
        height="2.2rem"
        stroke="var(--mantine-color-primary-filled)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        style={{ flexShrink: 0 }}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" opacity=".5" />
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
      </svg>

      {!iconOnly && (
        <>
          <Text fw="bold">{env.VITE_APP_NAME}</Text>
          <Badge style={{ flexShrink: 0 }} variant="light">
            {env.VITE_APP_VERSION}
          </Badge>
        </>
      )}
    </Group>
  );

  if (href) {
    return (
      <Link style={{ color: "inherit", textDecoration: "none" }} to={href}>
        {logo}
      </Link>
    );
  }

  return logo;
}
