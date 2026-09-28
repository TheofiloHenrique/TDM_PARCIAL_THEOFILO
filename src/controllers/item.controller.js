// "Controller": recibe la peticion, llama al model y devuelve la respuesta.

import ItemModel from '../models/item.model.js';

function list(req, res) {
  res.json(ItemModel.getAll());
}

function getOne(req, res) {
  const item = ItemModel.getById(req.params.id);
  if (!item) return res.status(404).json({ error: 'Item no encontrado' });
  res.json(item);
}

function create(req, res) {
  const newItem = ItemModel.create(req.body);
  res.status(201).json(newItem);
}

function update(req, res) {
  const updatedItem = ItemModel.update(req.params.id, req.body);
  if (!updatedItem) return res.status(404).json({ error: 'Item no encontrado' });
  res.json(updatedItem);
}

function remove(req, res) {
  const success = ItemModel.remove(req.params.id);
  if (!success) return res.status(404).json({ error: 'Item no encontrado' });
  res.status(204).send();
}

export default { list, getOne, create, update, remove };
