import React from 'react'

const ItemDetail = ({data}) => {
  return (
    <div className='contenedor'>
    <div className={`card detalle card mi-clase 
                                                ${data.status == 'Alive' 
                                                ? 'text-bg-success' 
                                                : data.status == 'Dead' 
                                                ? 'text-bg-secondary' 
                                                : 'text-bg-danger'}`} 
                                                style={{ width: '32rem'}}>
    <img src={data.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{data.name}</h5>
      <ul>
        <li>
        <p className="card-text">Creado: {data.created}</p>
        </li>
        <li>
        <p className="card-text">Especie: {data.species}</p>
        </li>
        <li>
        <p className="card-text">Genero: {data.gender}</p>
        </li>
        <li>
        <p className="card-text">Origen: {data.location.name}</p>
        </li>
        <li>
        <p className="card-text">Estado: {data.status}</p>
        </li>
      </ul>
    </div>
  </div>
  </div>
  )
}

export default ItemDetail