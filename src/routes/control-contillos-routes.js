const express = require('express');
const cintillos = express();
const { allCintillos , saveCintillos } = require('../controllers/control-cintillos-controller');

// registrar un cintillo nuevo
cintillos.post('', saveCintillos);
// ver todos los cintillos
cintillos.get('/cintillos', allCintillos);
// Actualizar un cintillo

module.exports = cintillos;
