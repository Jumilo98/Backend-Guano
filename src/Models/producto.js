import { DataTypes } from "sequelize"
import { sequelize }  from "../Database/db.js"


export const Producto = sequelize.define('Productos', {
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    nombres_producto: {
        type: DataTypes.STRING(50),
    },
    precio_producto:{
        type: DataTypes.DOUBLE,
    },
    descripcion_producto: {
        type: DataTypes.STRING(500),
    },
    likes_producto: {
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: true
});
