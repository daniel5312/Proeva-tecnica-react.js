import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import UsuariosList from "./pages/UsuariosList";
import EditarUsuario from "./pages/EditarUsuario";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
        <Route path="/register" element={<Register />} />
       <Route
        path="/Dashboard"
        element={
          <PrivateRoute>
            <Dashboard /> 
          </PrivateRoute>
        }
      />
      <Route path="/users" element={<UsuariosList />} />
      <Route path="/editar/:id" element={<EditarUsuario />} />
      <Route path="*" element={<UsuariosList/>} />
    </Routes>
  );
}

export default App;
