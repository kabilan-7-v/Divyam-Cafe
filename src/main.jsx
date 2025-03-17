import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Commonpage from './CommonPage/Commonpage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Commonpage />
  </StrictMode>,
)
