import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/logoReact.webp";

export const Cabecera = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#800000", 
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={miLogo}
              alt="El logo"
              style={{
                width: "50px", 
                height: "auto",
              }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}>
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="*"
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}>
                  Sedes
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}>
                  Películas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/pelicre">
                      Registrar películas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/pelilis">
                      Listar películas
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/peliadm">
                      Administrar películas
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/acer"
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}>
                  Acerca De
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
