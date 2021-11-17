import React from 'react';
import '/Users/gra/Trabajo-Practico-PW/pw-tup/src/components/resgister.css';
function Register() {
    return (
        <>
        <div>
        <div className="caja">
        <div className="caja-central">
            <div className="caja-central-titulo">
                <h3>Crea tu cuenta</h3>
            </div>
            <div className="ingreso-datos">
                <form>
                    <label for="nombre">Nombre:</label><br/>
                    <input type="text" id="nombre" name="nombre" value=""/><br/>
                    <label for="apellido">Apellido:</label><br/>
                    <input type="text" id="apellido" name="apellido" value=""/><br/>
                    <label for="localidad">Localidad:</label><br/>
                    <input type="text" id="localidad" name="localidad" value=""/><br/>
                    <label for="cuenta">Ingresa un nombre para tu cuenta:</label><br/>
                    <input type="text" id="cuenta" name="cuenta" value="" placeholder="Ej: juan123"/><br/>
                    <label for="password">Contraseña:</label><br/>
                    <input type="password" id="password" name="password" value=""/><br/>
                    <label for="password2">Repetí tu contraseña:</label><br/>
                    <input type="password" id="password2" name="password2" value=""/><br/>
                    <input className="centrar" type="submit" value="Ingresar"/>
                </form>
            </div>
        </div>
    </div>
        </div>
        </>
    )
}

export default Register
