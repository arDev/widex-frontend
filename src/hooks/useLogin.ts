import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../stores/userStore";


function useLogin(login: number, usuario: string, contrasena:string) {
  const [cargando, setCargando] = useState("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const  SetUser  = userStore(state => state.setUser);

  useEffect(() => {
    if (login > 0) {
      setCargando("cargando...");
      setError("");

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        username: usuario,
        password: contrasena,
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        
      };

      fetch("http://localhost:5000/User/Login", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          var login = JSON.parse(result);
          if (login.token != undefined) {
            const user = {
              token:login.token,
              limiteCredito:login.limiteCredito ,
              nombre:usuario
            }
            SetUser(user)
            localStorage.setItem("miToken", login.token);
            navigate("/ordenes");
          } else {
            setError("usuario y/o comtraseña incorrecto/s");
          }
          setCargando("");
        })
        .catch((error) => {
          setError(error);
          setCargando("");
        });
    }
  }, [login]);

  return { cargando, error };
}

export default useLogin;
