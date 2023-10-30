import { DataTypes } from "sequelize"
import { sequelize }  from "../database/db.js"

export const Destino = sequelize.define('Destinos', {

    id_destino: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    nombre_destino: {
        type: DataTypes.STRING(50),
    },
    ubicacion_destino: {
        type: DataTypes.STRING(100),
    },
    descripcion_destino: {
        type: DataTypes.STRING(500),
    },
    imagenes_destino: {
        type: DataTypes.STRING(50),
    },
    likes_destino: {
        type: DataTypes.INTEGER,
    },
    etiqueta_destino: {
        type: DataTypes.STRING(50),
    },

}, {
    timestamps: true
});
