// "Controller": recibe la peticion, llama al model y devuelve la respuesta.

import UserModel from '../models/user.model.js';

function list(req, res) {
  res.json(UserModel.getAll());
}

function getOne(req, res) {
  const user = UserModel.getById(req.params.id);
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(user);
}

function create(req, res) {
  const newUser = UserModel.create(req.body);
  res.status(201).json(newUser);
}

function update(req, res) {
  const updatedUser = UserModel.update(req.params.id, req.body);
  if (!updatedUser) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(updatedUser);
}

function remove(req, res) {
  const success = UserModel.remove(req.params.id);
  if (!success) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.status(204).send();
}

export default { list, getOne, create, update, remove };
