//Importar los modelos para poder crear la relaciones
import { Usuario } from "../Models/usuario.js";
import { Punto } from "../Models/punto.js";
import { Imagen } from "../Models/imagen.js";
import { Etiqueta } from "../Models/etiqueta.js";
import { Comentario } from "../Models/comentario.js";
import { Producto } from "../Models/producto.js";

import { DataTypes } from "sequelize"
import { sequelize }  from "../Database/db.js"

// relacion uno a uno Etiqueta -Punto
Etiqueta.hasOne(Punto, { foreignKey:'id_etiqueta'});
Punto.belongsTo(Etiqueta, { foreignKey:'id_etiqueta'});

//relacion uno a uno Usuario-Productos
Usuario.hasOne(Producto, { foreignKey:'id_usuario'});
Producto.belongsTo(Usuario, { foreignKey: 'id_usuario'})

//relacion uno a uno Usuario-Puntos
Usuario.hasOne(Punto, { foreignKey:'id_usuario'});
Punto.belongsTo(Usuario, { foreignKey: 'id_usuario'})

// relacion uno a muchos de Producto - Imagenes
Producto.hasMany(Imagen, { foreignKey:'id_producto'});
Imagen.belongsTo(Producto, { foreignKey: 'id_producto'})

// relacion uno a muchos de Punto - Imagenes
Punto.hasMany(Imagen, { foreignKey:'id_punto'});
Imagen.belongsTo(Punto, { foreignKey: 'id_punto'})

//relacion uno a muchos Producto - Comentarios
Producto.hasMany(Comentario, { foreignKey:'id_producto'});
Comentario.belongsTo(Producto, { foreignKey: 'id_producto'})

//relacion uno a muchos Punto - Comentarios
Punto.hasMany(Comentario, { foreignKey:'id_punto'});
Comentario.belongsTo(Punto, { foreignKey: 'id_punto'})