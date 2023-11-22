import { DataTypes } from "sequelize"
import { sequelize }  from "../Database/db.js"


export const Articulo = sequelize.define('Articulos', {

    id_articulo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    nombres_articulo: {
        type: DataTypes.STRING(50),
    },
    
    etiqueta_articulo:{
        type: DataTypes.STRING(50),
    },
   
    descripcion_articulo: {
        type: DataTypes.STRING(500),
    },

    likes_articulo: {
        type: DataTypes.INTEGER,
    },
    
}, {
    timestamps: true
});
