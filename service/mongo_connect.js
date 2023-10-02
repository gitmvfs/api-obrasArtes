const dotenv = require("dotenv") 
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

dotenv.config() // configurando as variaveis de ambiente

async function conectar_bd() {

    // Connect MongoDB at default port 27017.
    try{
       await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName : process.env.MONGO_DB_NAME,
        })
    } catch(erro){
        console.log("erro ao conectar no banco de dados: " + erro)
    }
}

module.exports = conectar_bd