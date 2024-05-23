import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/code-highlight/styles.layer.css';
import '@mantine/notifications/styles.layer.css';
import '@mantine/spotlight/styles.layer.css';
import '@mantine/carousel/styles.layer.css';
import '@mantine/dropzone/styles.layer.css';
import '@mantine/nprogress/styles.layer.css';
import '@mantine/tiptap/styles.layer.css';
import '@mantine/charts/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import './global.css';

import { HelmetProvider } from 'react-helmet-async';
import { MantineProvider } from '@mantine/core';

import { Router } from '@/routes/router';
import { theme } from '@/theme';

export default function App() {
  return (
    <HelmetProvider>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </HelmetProvider>
  );
}
