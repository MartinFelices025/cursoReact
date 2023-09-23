import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './components/NavBar/NavBar.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/itemDetailContainer/ItemDetail.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
