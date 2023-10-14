import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ elemento }) => {
    return (
        <>
            <div className="card elemento" style={{ width: '18rem' }}>
                <img src={`/src/components/imagenes/${elemento.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{elemento.titulo}</h5>
                    <span className="card-text">{elemento.autor}</span>
                    <p className="card-text">{`$ ${elemento.precio}`}</p>
                    <Link to={`/detalle/${elemento.id}`} className="btn btn-primary">Detalles</Link>
                </div>
            </div>
        </>
    )
}

export default ItemCard