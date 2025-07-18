import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HooksApps } from './HooksApps'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApps />
  </StrictMode>,
)
