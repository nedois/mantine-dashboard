import { Link } from 'react-router-dom';

import { StickyHeader } from '@/components/sticky-header';
import { Logo } from '@/components/logo';
import classes from './header.module.css';
import { SidebarButton } from './sidebar-button';

export function Header() {
  return (
    <StickyHeader className={classes.root}>
      <div className={classes.rightContent}>
        <SidebarButton />
        <Link to="/" className={classes.logo}>
          <Logo />
        </Link>
      </div>
      <div className={classes.leftContent}></div>
    </StickyHeader>
  );
}
