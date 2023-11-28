import { DataTypes } from "sequelize"
import { sequelize }  from "../Database/db.js"

export const Etiqueta = sequelize.define('Etiquetas', {
    id_etiqueta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    nombre_etiqueta: {
        type: DataTypes.string(100),
    },
}, {
    timestamps: false
});
