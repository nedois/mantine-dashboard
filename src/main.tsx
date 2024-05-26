import './global.css';

import ReactDOM from 'react-dom/client';

import { App } from './app';
import { enableMocking } from './enable-mocking';

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
});
