# Backend - Restaura

##  Deploy
El backend está desplegado en Render:  
[https://backend-restaura.onrender.com]

---

## Requisitos
Node.js v18+
npm
MongoDB Atlas (o local)

---

## Instalación
Clonar el repositorio:
*bash*
git clone https://github.com/Lucarradore/backend-restaura.git
cd backend-restaura
npm install
Crear un archivo .env en la raíz con las siguientes variables:

---

## Variables de Entorno
MONGO_URI=
JWT_SECRET=
PORT=
VITE_API_URL=

Ejecutar en modo desarrollo:
*bash*
npm run dev

Ejecutar en modo producción:
*bash*
npm start

---

### Autenticación
Los endpoints protegidos requieren un token JWT.

1. Primero registrarse o iniciar sesión en:
   - `POST URL(local) http://localhost:4000/api/auth/register`
   - `POST URL(local) http://localhost:4000/api/auth/login`

2. El backend devolverá un `token` en la respuesta.

3. Para acceder a los endpoints protegidos, incluir en el header:

Authorization: Bearer <su_token>

## Endpoints

*Registrar un nuevo usuario*
POST http://localhost:4000/api/auth/register 
Body ejemplo:

{
  "name": "Lucrecia",
  "lastName": "Carradore",
  "email": "lucrecia@ejemplo.com",
  "password": "Contraseña123",
  "confirmPassword": "Contraseña123"
}

*Iniciar sesión y obtener token JWT*
POST http://localhost:4000/api/auth/login 
Body ejemplo:

{
  "email": "juan@example.com",
  "password": "123456"
}

# Usuarios

*Listar todos los usuarios (requiere token)*
GET /api/users 

*Obtener un usuario por ID*
GET http://localhost:4000/api/users/:id 

*Actualizar un usuario*
PUT http://localhost:4000/api/users/:id 

*Eliminar un usuario*
DELETE http://localhost:4000/api/users/:id 

# Platos

*Listar platos*
GET http://localhost:4000/api/dishes

*Crear un nuevo plato (requiere token)*
POST http://localhost:4000/api/dishes 

*Actualizar un plato*
PUT http://localhost:4000/api/dishes/:id 

*Eliminar un plato*
DELETE http://localhost:4000/api/dishes/:id 

---

### Notas

Se recomienda usar la herramienta Postman para probar los endpoints.