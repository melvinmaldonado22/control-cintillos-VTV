const cintillo = require('../models/control-cintillos');
require('dotenv').config();


// :::::::::::::::::::::::::::::::::::::::::::
// ::               API REST                ::
// :::::::::::::::::::::::::::::::::::::::::::

// OBTENER CNTILLOS

const allCintillos = async (req, res) => {
    try {
        const patrocinio = await cintillo.find();
        res.send(patrocinio);
    } catch (error) {
        console.error('Error al obtener cintillos:', error);
        res.status(500).send({ error: 'Ocurrió un error al obtener cintillos' });
    }
};

// GUARDAR UN CINTILLO

const saveCintillos = async function(req, res) {
    try {
        const patrocinio = new cintillo(req.body);
        await patrocinio.save();
        res.status(201).send(patrocinio);
    } catch (error) {
        console.error('Error al crear cintillo:', error);
        res.status(500).send({ error: 'Ocurrió un error al crear cintillo' });
    }
};

module.exports = {
    allCintillos,
    saveCintillos
}