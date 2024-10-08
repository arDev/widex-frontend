import { useEffect, useState } from 'react'
import "./LoginForm.css"
import useLogin from '../../hooks/useLogin';
import { userStore } from '../../stores/userStore';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imagenes/widex-dark-gray-logo.png"

function LoginForm() {
  const [usuario, setUsuario] = useState("ADMIN");
  const [contraseña, setContraseña] = useState("ADMIN");
  const [login, setLogin] = useState(0);
  const setUser = userStore(state=> state.setUser)
  const navigate = useNavigate();
  
  const { cargando, error } = useLogin(login, usuario, contraseña);

  const handleSubmit = (e : any ) => {
    setLogin(login + 1);
    e.preventDefault();
  };

  useEffect( () => {

    var widexLogin: any = window.localStorage.getItem('WidexLogin')

    const user = JSON.parse(widexLogin)
    if (user !== null)
    {
     setUser(user) 
     navigate("/ordenes")
    }
},[])

  return (
    <div className="todo">
    <div className="wrapper">
    <img className="me-2" src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <div className="text-login">
          <p>Usuario</p>
          <input
            type="text"
            onChange={(e) => setUsuario(e.target.value)}
            value={usuario}
            required
          />
        </div>
        <div className="text-login">
          <p>Contraseña</p>
          <input
            type="password"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
            required
          />
        </div>
        <div className="d-grid gap-8 col-8 mx-auto">
          <div className="me-md-16 mt-4">
            <button type="submit" className="boton-iniciar">
              Iniciar
            </button>
          </div>
        </div>
        <p>{cargando}</p>
        <p>{error}</p>
      </form>
    </div>
  </div>
  )
}

export default LoginForm;
