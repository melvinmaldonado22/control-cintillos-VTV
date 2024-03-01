require('dotenv').config();
const mongoose = require('mongoose');

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(process.env.MONGO_URI)
        .then(result=>console.log('se conectó a mongo con la base de datos:', process.env.DATABASE))
        .catch(error=>console.log(error));
    }
}

module.exports = new Database();