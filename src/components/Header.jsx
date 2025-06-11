import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Biota Suscripciones</Link>

      <div className="ms-auto">
        <Link className="btn btn-outline-light me-2" to="/">Iniciar sesión</Link>
        <Link className="btn btn-outline-success" to="/register">Registrarse</Link>
      </div>
    </nav>
  );
};

export default Header;
