import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TagManager from 'react-gtm-module';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './i18n';
import './index.css';

const tagManagerArgs = {
  gtmId: import.meta.env.VITE_GTM_ID,
};
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
