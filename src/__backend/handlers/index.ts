import { setupWorker } from 'msw/browser';
import account from './account';
import atoms from './atoms';
import auth from './auth';
import companies from './companies';
import customers from './customers';
import notifications from './notifications';

export const worker = setupWorker(
  ...account,
  ...atoms,
  ...auth,
  ...companies,
  ...customers,
  ...notifications
);
