//Importar los modelos para poder crear la relaciones
import { Usuario } from "../models/usuario.js";
//import { Rol } from "../models/rol.js";
//import { Evento } from "../models/evento.js";
//import { Valoracion } from "../models/valoracion.js";
//import { Empleado } from "../models/empleado.js";
//import { Accidente } from "../models/accidente.js"
//import { Formulario } from "../Models/formulario.js";
import { Articulo } from "../Models/articulo.js";
import { Imagen } from "../Models/imagen.js";
import { Producto } from "../Models/producto.js";

import { DataTypes } from "sequelize"
import { sequelize }  from "../database/db.js"

// relacion uno a uno Articulo - Producto
Articulo.hasOne(Producto, { foreignKey:'id_articulo'});
Producto.belongsTo(Articulo, { foreignKey:'id_articulo'});

// relacion uno a muchos de Articulo - Imagen
Articulo.hasMany(Imagen, { foreignKey:'id_articulo'});
Imagen.belongsTo(Articulo, { foreignKey: 'id_articulo'})


//relacion muchos a mucho Usuario - Articulo
const Usuario_Articulo = sequelize.define('Usuario_Articulo', {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
}, { timestamps: false });
Usuario.belongsToMany(Articulo, { through: Usuario_Articulo, foreignKey: "id_articulo" });
Articulo.belongsToMany(Usuario, { through: Usuario_Articulo, foreignKey: "id_usuario" });

// relacion uno a uno Evento - Valoracion
//Evento.hasOne(Valoracion, { foreignKey:'id_evento'});
//Valoracion.belongsTo(Evento, { foreignKey:'id_evento'});

// ralacion uno a muchos de Evento - Empleado
//Empleado.hasMany(Evento, { foreignKey:'cedula_empleado'});
//Evento.belongsTo(Empleado, { foreignKey: 'cedula_empleado'})

//relacion muchos a mucho formulario - area
//const Formulario_Usuario = sequelize.define('llena', {
//  id_registro: {
//      type: DataTypes.INTEGER,
//     primaryKey: true,
//      autoIncrement: true,
//      allowNull: false
//  },
//  hora_fecha: DataTypes.DATE,
//  comentario: DataTypes.STRING(250)
//}, { timestamps: true });
//Formulario.belongsToMany(Usuario, { through: Formulario_Usuario, foreignKey: "id_formulario_seguridad_salud" });
//Usuario.belongsToMany(Formulario, { through: Formulario_Usuario, foreignKey: "id_usuario" });