import { Link } from 'react-router-dom';

import { StickyHeader } from '@/components/sticky-header';
import { Logo } from '@/components/logo';
import { SidebarButton } from './sidebar-button';
import { SearchButton } from './search-button';
import classes from './header.module.css';
import { ColorSchemeToggler } from './color-scheme-toggler';

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
      <div className={classes.leftContent}>
        <ColorSchemeToggler />
      </div>
    </StickyHeader>
  );
}
