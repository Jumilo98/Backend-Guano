import { DataTypes } from "sequelize"
import { sequelize }  from "../Database/db.js"


export const Punto = sequelize.define('Puntos', {
    id_punto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    nombres_punto: {
        type: DataTypes.STRING(50),
    },
    etiqueta_punto:{
        type: DataTypes.STRING(50),
    },
    descripcion_punto: {
        type: DataTypes.STRING(500),
    },
    likes_punto: {
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: true
});
