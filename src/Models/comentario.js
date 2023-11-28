import { DataTypes } from "sequelize"
import { sequelize }  from "../Database/db.js"

export const Comentario = sequelize.define('Comentarios', {
    id_comentario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    mensaje_comentario: {
        type: DataTypes.STRING(500),
    },
}, {
    timestamps: false
});
