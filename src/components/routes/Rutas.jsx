import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../../pages/home'
import Detalle from '../../pages/Detalle'

const Rutas = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categoria/:estado' element={<Home />} />
            <Route path='/detalle/:id' element={<Detalle />} />
        </Routes>
    )
}

export default Rutas