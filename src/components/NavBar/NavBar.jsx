import React from 'react'
import CartWidget from '.././cart/CartWidget'
import Logo from '.././logo/Logo'
import { NavLink } from 'react-router-dom'
import { useEffect, useState, useContext} from 'react';
import {getDocs} from "firebase/firestore";
import {retornaElementos } from '../../conexion/conexionDB'
import UsuarioContext from '../../provider/usuarioContext';
import CartContext from '../../provider/cartContext';

const NavBar = ({ items}) => {

    const [categorias, setCategorias] = useState([]);
    const { usuario } = useContext(UsuarioContext);
    const { carrito } = useContext(CartContext); 

    const cantidadEnCarrito = carrito.reduce((total, elemento) => total + elemento.cantidad, 0);

    useEffect(() => {
      async function fetchCategorias() {
        const querySnapshot = await getDocs(retornaElementos("categorias"));
        const categoriasData = [];
        querySnapshot.forEach((doc) => {
          categoriasData.push(doc.data());
        });
        setCategorias(categoriasData);
      }
  
      fetchCategorias();
    }, []);
  


    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand"  to="/">
                <Logo />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {categorias.map((categoria) => 
                            <li className="nav-item" key={categoria.id}>
                                <NavLink className={(({ isActive} ) => isActive ? "nav-link active" : "nav-link" )} aria-current="page" to={`/categoria/${categoria.id}`}>{categoria.categoria}</NavLink>
                            </li>
                            )}
                    </ul>
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    Bienvenido: <span className='badge bg-primary'> {usuario && usuario.Email} </span>
                    </li>
                </ul>
                {console.log(cantidadEnCarrito === 0)}
                <NavLink to="/cart" className={cantidadEnCarrito === 0 ? "disabled" : ""}><CartWidget cantidad={cantidadEnCarrito}/></NavLink>
                
            </div>
        </nav>
    )
}

export default NavBar