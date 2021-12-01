import {useEffect, useState} from "react";
import {httpGet} from "../utils/httpFunctions";
import './profile.css';
const Profile = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    httpGet('api/me/').then((res) => setUserData(res.data))
  }, [])

  return <div className="margen">
    <h2>Perfil de usuario</h2>
    <h3>Usuario:{userData.username}</h3>
    <h3>Nombre:{userData.first_name}</h3>
    <h3>Apellido:{userData.last_name}</h3>

  </div>
}

export default Profile