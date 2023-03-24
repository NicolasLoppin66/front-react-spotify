// Import des modules
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import du style de l'app
import './index.css'
import AppRoot from './tools/AppRoot'

// Arbre de l'application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>,
)
