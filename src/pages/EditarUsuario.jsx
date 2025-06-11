// src/pages/EditarUsuario.jsx
// src/pages/EditarUsuario.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  obtenerUsuarioPorId,
  actualizarUsuario,
} from "../services/UsuariosService";

const EditarUsuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const cargar = async () => {
      const data = await obtenerUsuarioPorId(id);
      setUsuario(data);
    };
    cargar();
  }, [id]);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await actualizarUsuario(id, usuario);
    navigate("/usuarios");
  };

  return (
    <div className="container mt-4">
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={usuario.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-success">Guardar cambios</button>
      </form>
    </div>
  );
};

export default EditarUsuario;
