import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TagManager from 'react-gtm-module'

import App from './App.jsx'
import './i18n';
import './index.css'

const tagManagerArgs = {
  gtmId: import.meta.env.VITE_GTM_ID
}
TagManager.initialize(tagManagerArgs)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
