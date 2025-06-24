import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';

import { App } from './app/App';

import './app/styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
