import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='card-container'>
      <div className="card">
        <div className="card-body">
          <h2>{greeting}</h2>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer