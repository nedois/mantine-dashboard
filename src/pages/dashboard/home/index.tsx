import { Page } from '@/components/page';
import { ColorSchemeToggle } from './color-scheme-toggle';
import { Welcome } from './welcome';
import classes from './home.module.css';

export default function HomePage() {
  return (
    <Page title="Home" className={classes.root}>
      <Welcome />
      <ColorSchemeToggle />
    </Page>
  );
}
