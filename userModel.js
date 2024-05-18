const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
    {
        idCarrera: {
            type: String
        },
        Nombre: {
            type: String
        },
        Especialidad: {
            type: String
        },
        Campus: {
            type: String
        },
        Materias: {
            type: String
        }

    },
    {
        timestamps:false,
        versionKey:false
    }
);

const ModelUser = mongoose.model("carreras",userModel);
module.exports = ModelUser;
