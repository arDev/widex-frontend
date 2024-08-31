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
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon "></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
           <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/ordenes">Ordenes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/stock">Stock</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout"><FaUserCircle />Salir</Link>
                </li> 
              </ul>
              <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
           </div>
         </div>
       </nav> : <></>}
      </header>
  )
}

export default Navbar;