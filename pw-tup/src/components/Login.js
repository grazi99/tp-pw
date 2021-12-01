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
        <div className='margen'>
      <div className='welcome-text-container'><h1>Inicio de sesión</h1></div>
      <br/>
      <form className='form-container' onSubmit={login}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Usuario</label>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Contraseña</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Password" />
        </div>
        <div className={'button-container'}>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    )
}

export default Login
