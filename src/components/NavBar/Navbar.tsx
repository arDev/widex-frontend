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
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container">
         <img className="logo-w me-2" src={logo} alt="logo" />
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
             <li className="nav-item">
                  <Link className="nav-link" to="/ordenes">Ordenes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/stock">Stock</Link>
                </li>
             </ul>
             <div className="d-flex" >          
             <Link className="nav-link" to="/logout"><FaUserCircle />Salir</Link>
             </div>
           </div>
         </div>
       </nav> : <></>}
      </header>
  )
}

export default Navbar;