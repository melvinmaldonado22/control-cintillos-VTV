const transmision = require('../models/control-transmisiones');
require('dotenv').config();


// :::::::::::::::::::::::::::::::::::::::::::
// ::               API REST                ::
// :::::::::::::::::::::::::::::::::::::::::::

// OBTENER TRANSMISION

const allTransmisiones = async (req, res) => {
    try {
        const transmition = await transmision.find();
        res.send(transmition);
    } catch (error) {
        console.error('Error al obtener transmisiones:', error);
        res.status(500).send({ error: 'Ocurrió un error al obtener transmisiones' });
    }
};

// GUARDAR UN USARIO

const saveTransmisiones = async function(req, res) {
    try {
        const transmition = new transmision(req.body);
        await transmition.save();
        res.status(201).send(transmition);
    } catch (error) {
        console.error('Error al crear el registro de la transmision:', error);
        res.status(500).send({ error: 'Ocurrió un error al crear el registro de la transmision' });
    }
};

module.exports = {
    allTransmisiones,
    saveTransmisiones
}