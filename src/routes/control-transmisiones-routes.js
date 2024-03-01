const express = require('express');
const transmisiones = express();
const { allTransmisiones , saveTransmisiones } = require('../controllers/control-transmisiones-controller');

// registrar una transmision nueva
transmisiones.post('', saveTransmisiones);
// ver todos los transmisions
transmisiones.get('/transmisiones', allTransmisiones);
// Actualizar un transmision

module.exports = transmisiones;
