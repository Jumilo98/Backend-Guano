import { DataTypes } from "sequelize"
import { sequelize }  from "../database/db.js"

export const Producto = sequelize.define('Productos', {

    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    precio_producto: {
        type: DataTypes.DOUBLE,
    },

}, {
    timestamps: false
});
