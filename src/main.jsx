import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'

// Arbre de l'application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* On appelle notre store */}
    <Provider store={store}>
      {/* On appelle le router pour gérer les Url */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
