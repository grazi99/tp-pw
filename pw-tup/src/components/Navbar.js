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
             <Link to="/" className="button boton-navbar">Inicio</Link>
        </div>
        <div className="fila-navbar">
            <Link to="/test" className="button boton-navbar">Test</Link>
            <Link to="/login" className="button boton-navbar">Iniciar sesion</Link>
            <Link to="/register" className="button boton-navbar">Registrate</Link>
        </div>
    </div>
    )
}

export default Navbar