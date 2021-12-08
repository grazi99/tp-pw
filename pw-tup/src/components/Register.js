import {useState} from "react";
import {httpGet, httpPost,httpPost2} from "../utils/httpFunctions";
import {useHistory} from 'react-router-dom';
import {Link} from "react-router-dom";
import swal from 'sweetalert2';
import './register.css';


const Register = () => {

  const [first_name, setFirstname] = useState([])
  const [last_name, setLastname] = useState([])
  const [email, setEmail] = useState([])
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const history = useHistory();

  const mostrarAlerta=()=>{
    swal.fire({
      title: 'Se ha registrado con éxito, por favor Inicie sesión',
      icon: 'success'}
    )
  }

  const mostrarError=()=>{
    swal.fire({
      title: 'No se pudo registrar, intente nuevamente',
      icon: 'error'}
    )
  }
  const signin = (e) => {
    e.preventDefault()
    httpPost2('api/register/', { first_name : first_name, last_name : last_name, email : email, username : username,
      password : password}).then(() => {  
         mostrarAlerta(); 
        history.push('/login');
      
      /*window.alert('Se ha registrado con éxito, por favor Inicie sesión')*/
    }).catch(() => {  
      mostrarError(); 
  })}
  

  return (
  <div class="caja">
    <div class="caja-central">
        <div class="caja-central-titulo">
            <h3>Crea tu cuenta</h3>
        </div>
    <div class="ingreso-datos-register">
    <form onSubmit={signin}>
        <div className="mb-3">
          <label htmlFor="disabledTextInput">Nombre</label><br/>
          <input type="text" id="disabledTextInput" value={first_name}
                 onChange={(e) => setFirstname(e.target.value) }/>
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput">Apellido</label><br/>
          <input type="text" id="disabledTextInput" value={last_name}
                 onChange={(e) => setLastname(e.target.value) }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput">Email</label><br/>
          <input type="text" id="disabledTextInput" value={email}
                 onChange={(e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput">Usuario</label><br/>
          <input type="text" id="disabledTextInput" value={username}
                 onChange={(e) => setUsername(e.target.value) }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput">Contraseña</label><br/>
          <input type="password" id="disabledTextInput" value={password}
                 onChange={(e) => setPassword(e.target.value) }
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">Registrarse</button>
        <Link to={'/inicio'}><button class="btn btn-secondary">Volver al Inicio</button></Link>
    </form>
  </div>
  </div>
  </div>
   
)
}

const cartel = () => {
  return(
  <div class="alert alert-warning alert-dismissable">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>¡Cuidado!</strong> Es muy importante que leas este mensaje de alerta.
  </div>)}

export default Register