import { Link } from 'react-router-dom';
import { Group } from '@mantine/core';

import { StickyHeader } from '@/components/sticky-header';
import { Logo } from '@/components/logo';
import { SidebarButton } from './sidebar-button';
import { SearchButton } from './search-button';
import { ColorSchemeToggler } from './color-scheme-toggler';
import { CurrentUser } from './current-user';
import { Notifications } from './notifications';
import classes from './header.module.css';

export function Header() {
  return (
    <StickyHeader className={classes.root}>
      <div className={classes.rightContent}>
        <SidebarButton />
        <Link to="/" className={classes.logo}>
          <Logo />
        </Link>
        <SearchButton />
      </div>

      <Group>
        <ColorSchemeToggler />
        <Notifications />
        <CurrentUser />
      </Group>
    </StickyHeader>
  );
}
