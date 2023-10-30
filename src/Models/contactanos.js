import { DataTypes } from "sequelize"
import { sequelize }  from "../database/db.js"

export const Contacto = sequelize.define('Contactanos', {

    id_contacto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    nombre_contacto: {
        type: DataTypes.STRING(50),
    },
    apellido_contacto: {
        type: DataTypes.STRING(50),
    },
    correo_contacto: {
        type: DataTypes.STRING(50),
    },
    telefono_contacto: {
        type: DataTypes.STRING(50),
    },
    mensaje_contacto: {
        type: DataTypes.STRING(500),
    },
    fecha_contacto: {
        type: DataTypes.DATE,
    },

}, {
    timestamps: true
});
