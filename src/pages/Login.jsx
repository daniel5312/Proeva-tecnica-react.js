import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:4000/users?email=${email}&password=${password}`);
      const data = await res.json();

      if (data.length > 0) {
        // Usuario válido
        localStorage.setItem("user", JSON.stringify(data[0]));
        Swal.fire("¡Bienvenido!", "Inicio de sesión exitoso", "success");
        navigate("/dashboard");
      } else {
        Swal.fire("Error", "Credenciales inválidas", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Fallo al conectar con el servidor", "error");
    }
  };

  return (
    <>
    <Header/>   
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
        <div className="mb-3">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
    </>
  );
};

export default Login;
