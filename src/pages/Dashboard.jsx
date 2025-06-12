import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Bienvenido al Panel Principal</h2>

      <div className="mt-4">
        {/* Botón para ir a la lista de usuarios */}
        <Link to="/usuarios" className="btn btn-primary me-2">
          Ver Usuarios
        </Link>

        {/* Puedes agregar más botones aquí */}
      </div>
    </div>
  );
};

export default Dashboard;
