const mongoose = require('mongoose');

const esquema = new mongoose.Schema({
    nombre_cliente: {
        type: String,
        required:true
    },
    tipo: {
        type: String,
        required: true
    },
    hora_transmitida: {
        type: String,
        reqired: true
    },
    fecha: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        reqired: true
    }
}); 

module.exports = mongoose.model('control-cintillos',esquema)