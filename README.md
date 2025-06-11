# React + Vite

# 📦 SubManager – Gestor de Suscripciones Digitales

SubManager es una aplicación web desarrollada con **React** y un backend simulado con **json-server**, diseñada para ayudar a los usuarios a gestionar sus suscripciones digitales de forma eficiente.

---

## 🚀 Características principales

- Registro e inicio de sesión de usuarios
- CRUD completo de usuarios (Crear, Leer, Editar, Eliminar)
- Gestión de suscripciones digitales:
  - Nombre del servicio
  - Costo mensual
  - Categoría
  - Fecha de renovación
- Diseño responsive y limpio con **Bootstrap**
- Alertas visuales con **SweetAlert2**
- Rutas protegidas (no se puede acceder al dashboard sin iniciar sesión)
- Proyecto modularizado con buenas prácticas

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Rol |
|------------|-----|
| React JS (Vite) | Frontend moderno y veloz |
| React Router DOM | Navegación entre vistas |
| Bootstrap | Estilos y diseño responsive |
| SweetAlert2 | Confirmaciones visuales |
| json-server | Simulación de backend local (API REST fake) |
| LocalStorage | Manejo de autenticación |
| JavaScript ES6+ | Lógica de negocio y manipulación de datos |

---

## 📁 Estructura del proyecto
git clone https://github.com/tu-usuario/submanager.git
cd submanager


src/
├── components/        # Navbar, Headers, etc.
├── pages/             # Vistas: Login, Register, Dashboard, UsuariosList, etc.
├── services/          # Lógica de llamadas a la API (usuariosService.js, subsService.js)
└── App.jsx            # Rutas principales
2. Instala las dependencias
npm install
3. Instala json-server globalmente (si no lo tienes)
npm install -g json-server
4. Inicia el backend simulado
json-server --watch db.json --port 4000
Esto levantará una API REST en http://localhost:4000.
5. Ejecuta la aplicación React
npm run dev
Accede en tu navegador a: http://localhost:5173

 Autenticación
Ingreso con correo y contraseña

Validación contra los usuarios almacenados en db.json

LocalStorage se usa para guardar la sesión del usuario

Las rutas como /dashboard o /usuarios están protegidas

🧪 Funcionalidades CRUD (usuarios)
Método	Ruta	Descripción
GET	/usuarios	Lista todos los usuarios
GET	/usuarios/:id	Trae un usuario por ID
POST	/usuarios	Crea un nuevo usuario
PUT	/usuarios/:id	Actualiza un usuario existente
DELETE	/usuarios/:id	Elimina un usuario

🌐 Despliegue
Puedes desplegar el frontend fácilmente en Vercel
Solo sube este repo y sigue las instrucciones.

👨‍💻 Autor
Daniel Vargas Hermosa
Estudiante de desarrollo de software y creador de Biota Orgánicos y SubManager
GitHub: @daniel5312
LinkedIn: Daniel Vargas Hermosa



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
