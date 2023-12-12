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
        allowNull: false,
        unique: true
    },
    descripcion_punto: {
        type: DataTypes.TEXT,
    },
    likes_punto: {
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: true,
    freezeTableName: true
});
