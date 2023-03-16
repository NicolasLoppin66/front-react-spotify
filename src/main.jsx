// Import des modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

// Import des page / composent
import store from './redux/store'
import Router from './tools/Router'

// Import du style de l'app
import './index.css'

// Arbre de l'application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* On appelle notre store */}
    <Provider store={store}>
      {/* On appelle le router pour gérer les Url */}
      <RouterProvider router={Router} />
      {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
    </Provider>
  </React.StrictMode>,
)
