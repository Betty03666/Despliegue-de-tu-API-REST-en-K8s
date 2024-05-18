const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        mongoose.set('strictQuery', true);
       
        await mongoose.connect("mongodb://mongo/APIREST", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conexión con la Base de Datos");
    } catch (error) {
        console.error("No se pudo establecer la conexión con la Base de Datos:", error);
    }
};

module.exports = dbconnect;
