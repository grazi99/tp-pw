import React from 'react';
import './login.css';
function Login() {
    return (
    <><div>
    <div className="caja">
        <div className="caja-central">
            <div className="caja-central-titulo">
                <h3>Inicio de sesion</h3>
            </div>
            <div className="ingreso-datos">
                <label for="cuenta">Ingresa tu cuenta:</label><br/>
                <input type="text" id="cuenta" name="cuenta" value=""/><br/>
                <label for="password">Contraseña:</label><br/>
                <input type="password" id="password" name="password" value=""/><br/>
                <input className="centrar" type="submit" value="Ingresar"/>
            </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default Login
