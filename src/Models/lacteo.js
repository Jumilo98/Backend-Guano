import { DataTypes } from "sequelize"
import { sequelize }  from "../database/db.js"


export const Lacteo = sequelize.define('Lacteos', {

    id_lacteo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    nombre_lacteo: {
        type: DataTypes.STRING(50),
    },
    fecha_caducidad_lacteo: {
        type: DataTypes.DATE,
    },
    descripcion_lacteo: {
        type: DataTypes.STRING(500),
    },
    precio_lacteo: {
        type: DataTypes.FLOAT,
    },
    imagenes_lacteo: {
        type: DataTypes.STRING(100),
    },
    likes_lacteo: {
        type: DataTypes.INTEGER,
    },
    etiqueta_lacteo:{
        type: DataTypes.STRING(50),
    },
}, {
    timestamps: true
});
