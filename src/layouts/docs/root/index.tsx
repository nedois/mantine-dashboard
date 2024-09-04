import { Outlet } from 'react-router-dom';
import { ScrollArea } from '@mantine/core';
import { Logo } from '@/components/logo';
import { MDXProvider } from '@/providers/mdx-provider';
import { Header } from '../header';
import { DocsSideBar } from '../sidebar';
import classes from './root.module.css';

export default function DocsLayout() {
  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Logo m="md" w="3rem" />
        <ScrollArea flex="1" px="md">
          <DocsSideBar />
        </ScrollArea>
      </div>

      <div className={classes.content}>
        <Header />
        <main className={classes.main}>
          <MDXProvider>
            <Outlet />
          </MDXProvider>
        </main>
      </div>
    </div>
  );
}
