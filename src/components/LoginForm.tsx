import { useEffect, useState } from "react";
import logoWidex from "../../assets/imagenes/widex-dark-gray-logo.png";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"

import { userStore } from "../stores/userStore";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const [usuario, setUsuario] = useState("ADMIN");
  const [contraseña, setContraseña] = useState("ADMIN");
  const [login, setLogin] = useState(0);
  const tk = userStore(state => state.usuario?.token)
  const navigate = useNavigate();

  const { cargando, error } = useLogin(login, usuario, contraseña);

  const handleSubmit = (e: any) => {
    setLogin(login + 1);
    e.preventDefault();
  };

  useEffect(() => {
    if (tk !== "") {
      navigate("/ordenes");
    }
  }, []);

  return (
    <div className="container">
      <div className="todo">
        <div className="wrapper">
          <img src={logoWidex} alt="logo" />
          <form onSubmit={handleSubmit}>
            <div className="text-login">
              <p>Hola</p>
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
    </div>
  );
};

export default Login;