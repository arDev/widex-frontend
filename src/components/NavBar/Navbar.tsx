import { Link } from "react-router-dom";
import { userStore } from "../../stores/userStore";
import logo from "../../assets/imagenes/widex-dark-gray-logo.png"
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const logueado = userStore(state => state.logueado)
  return (
      <header>
        { logueado ? 
<>
<nav className="navbar navbar-expand-sm navbar-dark ">
  <div className="container">
  <img className="logo-w me-2" src={logo} alt="logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <Link className="nav-link" to="/ordenes">Ordenes</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/stock">Stock</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/micuenta">Mi Cuenta</Link>
        </li>
      </ul>
      <ul className="navbar-nav d-flex">
             <li className="nav-item ">
             <Link className="nav-link" to="/logout"><FaUserCircle className="me-2"/>Salir</Link>
            </li>
      </ul>
    </div>
  </div>
</nav><div className="mb-4"></div></> : <></>}
      </header>
  )
}

export default Navbar;