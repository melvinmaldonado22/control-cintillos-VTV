const express = require('express');
const users = express();
const { allUsers , updateUser, deleteUser , saveUser, loginUser } = require('../controllers/usuarios-controller');

// inisiar sesión
users.post('/login', loginUser);
// registrar un usuario nuevo
users.post('', saveUser);
// ver todos los usuarios
users.get('/usuarios', allUsers);
// Actualizar un usuario
users.put('/:id', updateUser);
// Eliminar un usuario
users.delete('/:id', deleteUser);

module.exports = users;