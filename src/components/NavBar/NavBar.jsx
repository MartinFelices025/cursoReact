import React from 'react'
import CartWidget from '.././cart/CartWidget'
import Logo from '.././logo/Logo'
import { NavLink } from 'react-router-dom'

let menu=["Vivos", "No-Vivos", "Desconocido", "Contacto"];
const NavBar = ({ items}) => {
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
                            <li className="nav-item">
                                <NavLink className={(({ isActive} ) => isActive ? "nav-link active" : "nav-link" )} aria-current="page" to="/categoria/alive">Vivos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={( { isActive} ) => isActive ? "nav-link active" : "nav-link"}  aria-current="page" to="/categoria/dead">No-Vivos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={( { isActive} ) => isActive ? "nav-link active" : "nav-link"}  aria-current="page" to="/categoria/unknown">Desconocido</NavLink>
                            </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar