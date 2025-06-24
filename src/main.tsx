import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';

import { App } from './App/App';

import './app/styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
