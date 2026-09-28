// "Model": aqui se hacen las consultas SQL a la base de datos.
// El controller no sabe que hay SQLite por detras, solo llama estas funciones.

import db from '../config/db.js';

function getAll() {
  return db.prepare('SELECT * FROM users').all();
}

function getById(id) {
  return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
}

function create(data) {
  const { name, email } = data;
  const result = db
    .prepare('INSERT INTO users (name, email) VALUES (?, ?)')
    .run(name, email);
  return getById(result.lastInsertRowid);
}

function update(id, data) {
  const existing = getById(id);
  if (!existing) return null;

  const name = data.name ?? existing.name;
  const email = data.email ?? existing.email;

  db.prepare('UPDATE users SET name = ?, email = ? WHERE id = ?').run(
    name,
    email,
    id
  );

  return getById(id);
}

function remove(id) {
  const result = db.prepare('DELETE FROM users WHERE id = ?').run(id);
  return result.changes > 0;
}

export default { getAll, getById, create, update, remove };
