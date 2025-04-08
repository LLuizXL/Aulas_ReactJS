import { Link } from "react-router";
import { useState } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${darkMode ? "bg-dark navbar-dark" : "bg-body-secondary navbar-light"}`}>
        <div className="container-fluid">
          <h1 className="navbar-brand">React Router</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link className="nav-link" to="/contato">Contato</Link>
              </li>
            </ul>
            <button className="btn btn-outline-secondary" onClick={toggleDarkMode}>
              {darkMode ? "Modo Light" : "Modo Dark"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
