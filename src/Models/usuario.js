import { DataTypes } from "sequelize"
import { sequelize }  from "../Database/db.js"

export const Usuario = sequelize.define('Usuarios', {

    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    nombres_usuario:{
        type: DataTypes.STRING(50),
    },

    apellidos_usuario:{
        type: DataTypes.STRING(50),
    },

    email_usuario:{
        type: DataTypes.STRING(50),
    },

    contrasenia_usuario:{
        type: DataTypes.STRING(50),
    },    

}, {
    timestamps: true
});
