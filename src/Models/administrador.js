import { DataTypes } from "sequelize"
import { sequelize }  from "../database/db.js"

export const Administrador = sequelize.define('Administradores', {

    id_administrador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    nombre_administrador:{
        type: DataTypes.STRING(50),
    },

    contraseña_administrador:{
        type: DataTypes.STRING(50),
    },

    correo_administrador:{
        type: DataTypes.STRING(50),
    }

}, {
    timestamps: true
});
