import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)
  let menu=["Libros", "Remeras", "Objetos", "Contacto"];
  return (
   <div className='container'>
    <NavBar items={menu}/>
    <ItemListContainer greeting="GAG | Bienvenido a nuestra tienda"/>
    </div>
  )
}

export default App
