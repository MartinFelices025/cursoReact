import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../../pages/home'
import Detalle from '../../pages/Detalle'
import Cart from '../../pages/Cart'

const Rutas = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categoria/:categoria' element={<Home />} />
            <Route path='/detalle/:id' element={<Detalle />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default Rutas