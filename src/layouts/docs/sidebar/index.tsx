import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { NavLink, Stack, Title } from '@mantine/core';
import { useMenuSections } from './use-menu-sections';
import classes from './sidebar.module.css';

export function DocsSideBar() {
  const { pathname } = useLocation();
  const sections = useMenuSections();

  return (
    <Stack gap="xl">
      {sections.map(({ title, items }) => (
        <div key={title}>
          <Title order={6} ml="sm" mb="sm">
            {title}
          </Title>

          {items.map((item) => (
            <NavLink
              variant="subtle"
              to={item.href}
              key={item.name}
              label={item.name}
              component={RouterLink}
              className={classes.link}
              leftSection={<item.icon />}
              active={pathname.includes(item.href)}
            />
          ))}
        </div>
      ))}
    </Stack>
  );
}
