# Backend Checkpoint - API de Logística

## Intrucciones adicionales de uso

# 1. Clonar el repositorio
git clone https://github.com/spavel24/logistics-api.git
cd logistics-api

# 2. Instalar dependencias (incluye TypeScript, ts-node, etc.)
npm install

# 3. Crear archivo .env en la raíz del proyecto con las variables necesarias:
# Ejemplo de contenido del archivo .env:
# MONGO_URI=mongodb://localhost:27017/logistics-api
# JWT_SECRET=tu_clave_secreta
# PORT=3000

# 4. Asegurarse que MongoDB esté corriendo localmente o usar una URI válida

# 5. Ejecutar el proyecto en modo desarrollo (con ts-node para TypeScript)
npm run dev

# 6. (Opcional) Para compilar a JavaScript en la carpeta dist
npx tsc

# 7. (Opcional) Ejecutar la versión compilada
node dist/index.js

## Tecnologías
Node.js, TypeScript, MongoDB, JWT

## Funcionalidades
- CRUD de Users, Trucks, Orders, Locations
- JWT Authentication
- Relaciones entre entidades

## Descripción
Código enfocado a APIs RESTful para gestionar usuarios, camiones, órdenes y ubicaciones en un sistema logístico, desarrollada con Node.js, Express, MongoDB y autenticación JWT.

## Postman Collection
Importa la colección `postman/logistics-api.postman_collection.json` en Postman para probar los endpoints del API.
