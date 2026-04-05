import { Flex, ScrollArea } from "@mantine/core";

import { type DashboardSidebarProps, Icon, Logo, Sidebar, type SidebarSectionProps } from "#/components";
import { useSmallerThan } from "#/hooks";

const sections: Array<SidebarSectionProps> = [
  {
    header: "Overview",
    items: [
      {
        href: "/overview",
        icon: <Icon h="1rem" icon="lucide:house" />,
        label: "Welcome",
      },
    ],
  },
  {
    header: "Components",
    items: [
      {
        href: "/components/showcase",
        icon: <Icon h="1rem" icon="lucide:palette" />,
        label: "Showcase",
      },
      {
        href: "/components/tables",
        icon: <Icon h="1rem" icon="lucide:table" />,
        label: "Tables",
      },
    ],
  },
];

export function DashboardSidebar({ closeNavbar }: DashboardSidebarProps) {
  const isMobile = useSmallerThan("md");

  const handleNavigate = () => {
    if (isMobile) {
      closeNavbar?.();
    }
  };

  return (
    <Flex direction="column" h="100%">
      <Flex
        align="center"
        h="4rem"
        pl="1.3rem"
        style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}
      >
        <Logo href="/" />
      </Flex>
      <ScrollArea flex="1">
        <Sidebar onNavigate={handleNavigate} p="md" sections={sections} />
      </ScrollArea>
    </Flex>
  );
}
