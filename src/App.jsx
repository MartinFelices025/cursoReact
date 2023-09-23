import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Rutas from './components/routes/Rutas'


function App() {
  return (

    <div className='container'>
      <NavBar />
      <Rutas />
    </div>
  )
}

export default App
