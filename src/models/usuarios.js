const mongoose = require('mongoose');

const esquema = new mongoose.Schema({
    nombre_usuario: {
        type: String,
        required:true
    },
    nickname: {
        type: String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('usuarios',esquema)