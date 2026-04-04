import { Divider, Stack, type StackProps } from "@mantine/core";

import { SidebarItem, type SidebarItemProps } from "./sidebar-item";
import { SidebarSectionTitle } from "./sidebar-section-title";

export interface SidebarProps extends StackProps {
  onNavigate?: (href: string) => void;
  sections: Array<SidebarSectionProps>;
  withDivider?: boolean;
  withHeader?: boolean;
}

export interface SidebarSectionProps {
  header: string;
  items: Array<SidebarItemProps>;
}

export function Sidebar({ gap = "md", onNavigate, sections, withDivider, withHeader = true, ...props }: SidebarProps) {
  return (
    <Stack {...props} gap={gap}>
      {sections.map((section, index) => (
        <div key={section.header || index}>
          {index !== 0 && withDivider && <Divider mb="lg" mx="md" />}
          {withHeader && <SidebarSectionTitle>{section.header}</SidebarSectionTitle>}

          {section.items.map((item) => (
            <SidebarItem key={item.label} onNavigate={onNavigate} {...item} />
          ))}
        </div>
      ))}
    </Stack>
  );
}
