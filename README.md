# Caso 1 - Landimg page videojuego indie / BloodVania

## Como ejecutar
```
npm install
npm run start
```

Luego abre http://localhost:3000

## Variables de entorno
Copia `.env.example` a `.env` (ya viene creado con valores por defecto) y ajusta si es necesario:
```
PORT=3000
DB_FILE=./database.db
```

## Estructura (MVC)
```
src/
  config/db.js        -> conexion y creacion de la tabla en SQLite
  models/              -> consultas SQL (SELECT, INSERT, UPDATE, DELETE)
  controllers/          -> logica: recibe la peticion, llama al model, responde
  routes/               -> define los endpoints de la API
  server.js             -> punto de entrada de la aplicacion
public/                 -> front-end (HTML + Bootstrap + JS con fetch)
```

## Ver los datos guardados en SQLite
El archivo `database.db` se crea solo la primera vez que corres el servidor. Opciones para verlo:
- Extension de VS Code "SQLite Viewer" o "SQLite" (de alexcvzz) — abres el archivo `.db` directo en el editor.
- Programa "DB Browser for SQLite" (interfaz grafica separada).
- Por terminal, con el cliente `sqlite3` instalado en el sistema:
  ```
  sqlite3 database.db
  .tables
  SELECT * FROM items;
  .quit
  ```

