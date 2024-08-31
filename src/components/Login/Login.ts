import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../stores/userStore"
import { appSetting } from "../../settings/appsettings"

function Login() {
  const usuario = userStore(state => state.usuario)
  const setUser = userStore(state => state.setUser)
  const navigate = useNavigate();

  useEffect(() => {

    if (usuario == undefined) {

      async function postData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors', 
          cache: 'no-cache',
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
           
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(data) 
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }

      postData( appSetting.urlApi + '/user/login', { username: 'ADMIN', password: 'ADMIN' })
        .then(data => {
          setUser(data)
          navigate("/stock") 
        });

    }
  }
    , []);
}

export default Login;


