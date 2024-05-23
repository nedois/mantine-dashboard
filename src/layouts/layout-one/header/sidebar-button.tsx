import { useEffect } from 'react';
import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation } from 'react-router-dom';

import { HamburgerButton } from '@/components/hamburger-button';
import { Logo } from '@/components/logo';
import { Sidebar } from '../sidebar';

export function SidebarButton() {
  const location = useLocation();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    // Close sidebar on navigate
    close();
  }, [location.pathname]);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close} size="270px">
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header px="1.725rem" mb="md">
            <Logo w="3rem" />
          </Drawer.Header>
          <Drawer.Body>
            <Sidebar />
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      <HamburgerButton onClick={open} display={{ xl: 'none' }} />
    </>
  );
}
