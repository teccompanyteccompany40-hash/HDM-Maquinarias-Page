import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { CotizacionProvider } from './context/CotizacionContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CotizacionProvider>
        <App />
      </CotizacionProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
