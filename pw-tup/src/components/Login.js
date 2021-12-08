import React from 'react';
import './login.css';
import {useState} from "react";
import {httpPost} from "../utils/httpFunctions";
import {useHistory} from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const history = useHistory();

  const login = (e) => {
    e.preventDefault()
    httpPost('api/login/', {username: username, password: password}).then((res) => {
      localStorage.setItem('token', res.data.access)
      history.push('/main')
    })
  }
    return (
  <div class="caja">
    <div class="caja-central">
          <div class="caja-central-titulo">
              <h3>Inicio de sesion</h3>
          </div>
    <div class="ingreso-datos-login">
      <form className='form-container' onSubmit={login}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Usuario</label><br/>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Contraseña</label><br/>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleFormControlInput1" />
        </div>
        <br/>
        <div className={'button-container'}>
          <button type="submit" className="btn btn-primary">Iniciar sesion</button>
        </div>
      </form>
        </div>
    </div>
  </div>
    )
}

export default Login
