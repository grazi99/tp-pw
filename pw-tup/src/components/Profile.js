import {useEffect, useState} from "react";
import {httpGet} from "../utils/httpFunctions";
import './profile.css';
const Profile = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    httpGet('api/me/').then((res) => setUserData(res.data))
  }, [])

  return (
  <div class="caja">
    <div class="caja-central">
        <div class="caja-central-titulo">
            <h3>Perfil de usuario</h3>
        </div>
    <div class="ingreso-datos-profile">
      <h3>Usuario: {userData.username}</h3>
      <h3>Nombre: {userData.first_name}</h3>
      <h3>Apellido: {userData.last_name}</h3>
      <h3>Mail : {userData.email}</h3>
    </div>
    </div>
  </div>
  )
}

export default Profile