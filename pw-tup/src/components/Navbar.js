import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    
  } from "react-router-dom";

function Navbar() {
    return (
    <div className="distribucion-navbar">
        <div className="fila-navbar">
             <Link to="/" className="button boton-navbar p1">Inicio</Link>
        </div>
        <div className="fila-navbar">
            <Link to="/comunidad" className="button boton-navbar p1">Comunidad</Link>
            <Link to="/profile" className="button boton-navbar p1">Perfil</Link>
            <Link to="/login" className="button boton-navbar p1">Iniciar sesion</Link>
            <Link to="/register" className="button boton-navbar p1">Registrate</Link>
        </div>
    </div>
    )
}

export default Navbar
