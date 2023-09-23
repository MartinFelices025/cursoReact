import React from 'react'
import ItemCard from './itemCard'

const ItemsListado = ({ elementos }) => {
  return (
    <div>
      <ul>
        {
          elementos.map((elemento) => (
            <li key={elemento.id} className="d-inline-block">
              <ItemCard elemento={elemento} />
            </li>
          ))
        }
      </ul>
    </div>

  )
}

export default ItemsListado