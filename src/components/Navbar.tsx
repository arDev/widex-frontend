import { Link } from "react-router-dom";
import { userStore } from "../stores/userStore";
import logo from "../assets/imagenes/widex-logo-solo.png"
import "./Navbar.css"

function Navbar() {
  const logueado = userStore(state => state.logueado)

  return (
    
      <header>
        { logueado ? 
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
          <div className="container">
            <img className="logo-w me-2" src={logo} alt="logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/"> Home </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productos">Productos </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categorias">Categorias </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">Salir </Link>
                </li> : <></>
              </ul>
            </div>
          </div>
        </nav>  : <></>}
      </header>
  )
}

export default Navbar;