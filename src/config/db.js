// Configuracion de la conexion a la base de datos SQLite.
// Se crea el archivo automaticamente si no existe.

import Database from 'better-sqlite3';

const dbFile = process.env.DB_FILE || './database.db';
const db = new Database(dbFile);

// Crea la tabla "users" si todavia no existe.
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
  )
`);

export default db;
