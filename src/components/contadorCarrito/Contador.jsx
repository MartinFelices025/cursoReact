import React, { useState } from 'react'

const Contador = ({ agegarProducto, stock }) => {
  const [cantidad, setCantidad] = useState(0)
  //valido que la cantidad seleccionada no supere el stock disponible
  const agregar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }

  }
  const quitar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }
  return (
    <div className='contenedor-contador'>
      <button onClick={agregar} className='btn btn-danger'>+</button>
      <span className='contador'>{cantidad}</span>
      <button onClick={quitar} className='btn btn-danger'>-</button>
      <button onClick={() => agegarProducto(cantidad)} className={`btn btn-success ${cantidad == 0 ? 'disabled' : 'enabled'}`}>Agregar al carrito</button>
    </div>
  )
}

export default Contador