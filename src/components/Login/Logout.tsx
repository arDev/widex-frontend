import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../stores/userStore";

export  function Logout() {

    const logout = userStore(state => state.logout)
    const navigate = useNavigate();

    const BorrarUser = () => {
        localStorage.removeItem("WidexLogin")
        logout()
        
    }

    useEffect(() => {
        BorrarUser()
        navigate("/");
    }, [])

    return (
        <>
        </>
    )
}

export default Logout;
