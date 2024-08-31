import { Navigate, Outlet } from "react-router-dom";
import { userStore } from "../stores/userStore";



const ProtectedRoute = ({
    redirectPath = '/'
}) => {
    const logueado = userStore(state => state.logueado)
    
    if (!logueado) {
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default ProtectedRoute;