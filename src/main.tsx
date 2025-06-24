import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';

import { App } from './app2/App';

import './app/styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
