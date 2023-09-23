import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ elemento }) => {
    return (
        <>
            <div className="card elemento" style={{ width: '18rem' }}>
                <img src={elemento.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{elemento.name}</h5>
                    <p className="card-text">{elemento.species}</p>
                    <Link to={`/detalle/${elemento.id}`} className="btn btn-primary">Detalles</Link>
                </div>
            </div>
        </>
    )
}

export default ItemCard