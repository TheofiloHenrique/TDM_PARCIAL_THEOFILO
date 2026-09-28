// Configuracion de la conexion a la base de datos SQLite.
// Se crea el archivo automaticamente si no existe.

import Database from 'better-sqlite3';

const dbFile = process.env.DB_FILE || './database.db';
const db = new Database(dbFile);

// Crea la tabla "items" si todavia no existe.
// Cambia el nombre de la tabla y las columnas segun la entidad real del examen.
db.exec(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
  )
`);

export default db;
