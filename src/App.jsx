import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Rutas from './components/routes/Rutas'
import CartContextProvider from './provider/CartContextProvider'
import UsuarioContextProvider from './provider/UsuarioContextProvider'
import Footer from './pages/Footer'


function App() {
  return (
    <UsuarioContextProvider>
      <CartContextProvider>
        <div className='container'>
          <NavBar />
          <Rutas />
          <Footer />
        </div>
      </CartContextProvider>
    </UsuarioContextProvider>
  )
}

export default App
