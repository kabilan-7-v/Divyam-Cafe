import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Commonpage from './CommonPage/Commonpage'
import RouterPage from './Router/RouterPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterPage/>
  </StrictMode>,
)
