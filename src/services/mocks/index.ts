import { setupWorker } from 'msw/browser';

import atoms from './atoms';
import companies from './companies';

export const worker = setupWorker(...atoms, ...companies);
