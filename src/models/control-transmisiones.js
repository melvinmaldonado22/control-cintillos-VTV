const mongoose = require('mongoose');

const esquema = new mongoose.Schema({
    titulo_transmision: {
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

module.exports = mongoose.model('control-transmisiones',esquema)