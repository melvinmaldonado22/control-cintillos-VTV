const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./modules/database');
require('dotenv').config();
let port = process.env.PORT || 3000;
let host = process.env.HOST || '0.0.0.0';

const users = require('./routes/usuarios-routes');
const transmitions = require('./routes/control-transmisiones-routes');
const cintillos = require('./routes/control-contillos-routes');

// midellwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas RestAPI
app.use('/api/vtv/usuarios', users);
app.use('/api/vtv/transmisiones', transmitions);
app.use('/api/vtv/cintillos', cintillos);

// Iniciar server
app.listen (port,host, ()=>{ 
    console.log(`Servidor iniciado!! -  En el puerto: ${port}`);
})