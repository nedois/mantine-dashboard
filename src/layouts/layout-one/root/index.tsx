import { ReactNode } from 'react';
import { Paper, ScrollArea } from '@mantine/core';

import { Logo } from '@/components/logo';
import { Header } from '../header';
import { Sidebar } from '../sidebar';
import classes from './root.module.css';

interface LayoutOneProps {
  children?: ReactNode;
}

export function LayoutOne({ children }: LayoutOneProps) {
  return (
    <div className={classes.root}>
      <Paper className={classes.sidebarWrapper}>
        <div className={classes.logoWrapper}>
          <Logo w="3rem" />
        </div>
        <ScrollArea flex="1" px="md">
          <Sidebar />
        </ScrollArea>
      </Paper>
      <div className={classes.content}>
        <Header />
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
}
