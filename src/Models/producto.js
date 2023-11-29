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
        unique: true,
        allowNull: false
    },
    etiqueta_producto: {
        type: DataTypes.ENUM,
        values: ['Leche', 'Yogurt', 'Queso'],
        allowNull: false  // o false si quieres que sea un campo obligatorio
    },
    precio_producto:{
        type: DataTypes.DOUBLE,
        allowNull:false
    },
    descripcion_producto: {
        type: DataTypes.STRING(500),
    },
    likes_producto: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: true,
    freezeTableName: true
});
