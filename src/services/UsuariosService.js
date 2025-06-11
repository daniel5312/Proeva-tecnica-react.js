// src/services/usuariosService.js

const API_URL = "http://localhost:4000/usuarios";

export const obtenerUsuarios = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const obtenerUsuarioPorId = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const actualizarUsuario = async (id, datos) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  return res.json();
};

export const eliminarUsuario = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
