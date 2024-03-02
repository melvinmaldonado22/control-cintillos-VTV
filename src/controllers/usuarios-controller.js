const user = require('../models/usuarios');
require('dotenv').config();


// :::::::::::::::::::::::::::::::::::::::::::
// ::               API REST                ::
// :::::::::::::::::::::::::::::::::::::::::::

// OBTENER USUARIOS

const allUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.send(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).send({ error: 'Ocurrió un error al obtener usuarios' });
    }
};

// GUARDAR UN USARIO

const saveUser = async function(req, res) {
    try {
        const usuario = new user(req.body);
        await usuario.save();
        res.status(201).send(usuario);
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).send({ error: 'Ocurrió un error al crear usuario' });
    }
};

// ACTUALIZAR UN USUARIO

const updateUser =  async function(req, res) {
    try {
        const userId = req.params.id;
        const updatedUser = await user.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).send({ error: 'Usuario no encontrado' });
        }
        res.send(updatedUser);
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).send({ error: 'Ocurrió un error al actualizar usuario' });
    }
};

// BORRAR UN USUARIO

const deleteUser = async function(req, res) {
    try {
        const userId = req.params.id;
        const deletedUser = await user.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).send({ error: 'Usuario no encontrado' });
        }
        res.send({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).send({ error: 'Ocurrió un error al eliminar usuario' });
    }
};


// POST INISIAR SESION

const loginUser =  async function(req, res) {
    try {
        const { nickname, contrasenia } = req.body;
        const foundUser = await user.findOne({ nickname });
        if (foundUser && foundUser.contrasenia === contrasenia) {
            res.send({ 
                message: 'Inicio de sesión exitoso',
                auth: true,
                tipo: foundUser.tipo,
                usuario: foundUser.nombre_usuario
            });
        } else {
            res.status(401).send({ 
                error: 'Nombre de usuario o contraseña incorrectos', 
                auth: false
            });
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).send({ error: 'Ocurrió un error al iniciar sesión' });
    }
};

module.exports = {
    allUsers,
    saveUser,
    updateUser,
    deleteUser,
    loginUser
}