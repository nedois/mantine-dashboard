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
import { QueryClientProvider } from '@tanstack/react-query';
import { NavigationProgress } from '@mantine/nprogress';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

import { Router } from '@/routes/router';
import { theme } from '@/theme';
import { queryClient } from '@/services/query-client';
import { AuthProvider } from '@/providers/auth-provider';

export function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MantineProvider theme={theme}>
            <Notifications position="bottom-center" />
            <NavigationProgress />
            <ModalsProvider>
              <Router />
            </ModalsProvider>
          </MantineProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
