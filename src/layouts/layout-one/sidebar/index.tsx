import { NavLink as RouterLink } from 'react-router-dom';
import { Stack, Title, NavLink } from '@mantine/core';

import { menu } from './menu-sections';
import classes from './sidebar.module.css';

export function Sidebar() {
  return (
    <Stack gap="xl">
      {menu.map((item) => (
        <div key={item.header}>
          <Title order={6} className={classes.sectionTitle}>
            {item.header}
          </Title>

          {item.section.map((subItem) =>
            subItem.href ? (
              <NavLink
                variant="subtle"
                component={RouterLink}
                to={subItem.href}
                key={subItem.name}
                label={subItem.name}
                className={classes.sectionLink}
                leftSection={subItem.icon && <subItem.icon />}
              />
            ) : (
              <NavLink
                variant="subtle"
                key={subItem.name}
                label={subItem.name}
                childrenOffset={0}
                className={classes.sectionLink}
                leftSection={subItem.icon && <subItem.icon />}
              >
                {subItem.dropdownItems?.map((dropdownItem) => (
                  <NavLink
                    variant="subtle"
                    component={RouterLink}
                    to={dropdownItem.href}
                    key={dropdownItem.name}
                    label={dropdownItem.name}
                    className={classes.sectionDropdownItemLink}
                    leftSection={<span className="dot" />}
                  />
                ))}
              </NavLink>
            )
          )}
        </div>
      ))}
    </Stack>
  );
}
