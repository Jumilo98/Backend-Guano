import { DataTypes } from "sequelize"
import { sequelize }  from "../Database/db.js"

export const Imagen = sequelize.define('Imagenes', {
    id_imagen: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    url_imagen: {
        type: DataTypes.STRING(100),
    },
    id_imagen_cloudinary: {
        type: DataTypes.STRING(100),
    },
}, {
    timestamps: false,
    freezeTableName: true
});
