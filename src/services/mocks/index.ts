import { setupWorker } from 'msw/browser';

import auth from './auth';
import account from './account';
import atoms from './atoms';
import companies from './companies';

export const worker = setupWorker(...auth, ...account, ...atoms, ...companies);
