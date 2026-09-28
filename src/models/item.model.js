// "Model": aqui se hacen las consultas SQL a la base de datos.
// El controller no sabe que hay SQLite por detras, solo llama estas funciones.

import db from '../config/db.js';

function getAll() {
  return db.prepare('SELECT * FROM items').all();
}

function getById(id) {
  return db.prepare('SELECT * FROM items WHERE id = ?').get(id);
}

function create(data) {
  const { name, description } = data;
  const result = db
    .prepare('INSERT INTO items (name, description) VALUES (?, ?)')
    .run(name, description);
  return getById(result.lastInsertRowid);
}

function update(id, data) {
  const existing = getById(id);
  if (!existing) return null;

  const name = data.name ?? existing.name;
  const description = data.description ?? existing.description;

  db.prepare('UPDATE items SET name = ?, description = ? WHERE id = ?').run(
    name,
    description,
    id
  );

  return getById(id);
}

function remove(id) {
  const result = db.prepare('DELETE FROM items WHERE id = ?').run(id);
  return result.changes > 0;
}

export default { getAll, getById, create, update, remove };
