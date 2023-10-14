import React from 'react'
import Contador from '../contadorCarrito/contador'

const ItemDetail = ({data, agegarProducto}) => {
  return (
    <div className='contenedor'>
    <div className="card detalle card detalle-card text-bg-success" style={{ width: '52rem'}}>
    <img src={`/src/components/imagenes/${data.img}`} className="card-img-top img-prod" alt="..." />
    <div className="card-body">
      <h4 className="card-title">{`$ ${data.precio}`}</h4>
      <h5 className="card-title">{data.titulo}</h5>
      <ul>
        <li>
        <p className="card-text">Autor: {data.autor}</p>
        </li>
        <li>
        <p className="card-text">Genero: {data.genero}</p>
        </li>
        <li>
        <p className="card-text">Stock: {data.stock}</p>
        </li>
        <li>
        <p className="card-text">Descripcion: {data.descripcion}</p>
        </li>
      </ul>
    </div>
    <Contador agegarProducto={agegarProducto} stock={data.stock}/>
  </div>
  </div>
  )
}

export default ItemDetail