import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/users");
      const users = await res.json();

      const existe = users.find((u) => u.email === email);
      if (existe) {
        setError("El correo ya está registrado");
        return;
      }

      await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      navigate("/");
    } catch{
      setError("Error al registrar usuario");
    }
  };

  return (
    <>
    <Header />  
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Registro</h2>
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input type="password" className="form-control"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="btn btn-primary w-100" type="submit">Crear cuenta</button>

        <p className="mt-3 text-center">
          ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
        </p>
      </form>
    </div>
    </>
  );
};

export default Register;
