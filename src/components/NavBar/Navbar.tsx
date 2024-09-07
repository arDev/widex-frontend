import { Link } from "react-router-dom";
import { userStore } from "../../stores/userStore";
import logo from "../../assets/imagenes/widex-dark-gray-logo.png"
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css"


function Navbar() {
  const logueado = userStore(state => state.logueado)
  return (
    <header>
    { logueado ? 
<>
    <nav className="navbar navbar-expand-sm  border-bottom border-body p-3 mb-4" >
      <div className="container">
        <img className="img-widex" src={logo} alt="logo-widex" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container">
          <ul className="navbar-nav nav-underline">
            <li className="nav-item">
              <Link className="nav-link" to="/ordenes">Ordenes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/stock">Stock</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/micuenta">Mi Cuenta</Link>
            </li>
          </ul>
          </div>
          <div className="position-absolute top-50 end-0 translate-middle-y">
            <ul className="navbar-nav ">
            <li className="nav-item pe-5">

              <Link className="nav-link" to="/logout"><FaUserCircle className="" />Salir</Link>
            </li>
          </ul>
          </div>
    
        </div>
        
      </div>
    </nav>
    </> : <></>}
      </header>
  )
}

export default Navbar;