/*
//Importar los modelos para poder crear la relaciones
import { Usuario } from "../models/usuario.js";
import { Rol } from "../models/rol.js";
import { Evento } from "../models/evento.js";
import { Valoracion } from "../models/valoracion.js";
import { Empleado } from "../models/empleado.js";
import { Accidente } from "../models/accidente.js"
import { Formulario } from "../Models/formulario.js";
import { Centro } from "../Models/centro.js";
import { Area } from "../Models/area.js";
import { DataTypes } from "sequelize"
import { sequelize }  from "../database/db.js"

// Relacion muchos a muchos Rol - Usuarios
// Crea automaticamente la tabla --rol usuario--
Usuario.belongsToMany(Rol, { through: "rol_usuario", foreignKey: "id_usuario", });
Rol.belongsToMany(Usuario, { through: "rol_usuario", foreignKey: "id_rol", });

// relacion uno a uno Evento - Valoracion
Evento.hasOne(Valoracion, { foreignKey:'id_evento'});
Valoracion.belongsTo(Evento, { foreignKey:'id_evento'});

// ralacion uno a muchos de Evento - Empleado
Empleado.hasMany(Evento, { foreignKey:'cedula_empleado'});
Evento.belongsTo(Empleado, { foreignKey: 'cedula_empleado'})

// relacion uno a uno evento - acciednete/incidente
Evento.hasOne(Accidente, { foreignKey:'id_evento'});
Accidente.belongsTo(Evento, { foreignKey:'id_evento'});

//relacion muchos a mucho formulario - area
const Formulario_Usuario = sequelize.define('llena', {
  id_registro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  hora_fecha: DataTypes.DATE,
  comentario: DataTypes.STRING(250)
}, { timestamps: true });
Formulario.belongsToMany(Usuario, { through: Formulario_Usuario, foreignKey: "id_formulario_seguridad_salud" });
Usuario.belongsToMany(Formulario, { through: Formulario_Usuario, foreignKey: "id_usuario" });

//relacion muchos a mucho formulario - area
const Formulario_Area = sequelize.define('formulario_seguridad_salud_cont', {
  porcentaje_cumplimiento: DataTypes.FLOAT
}, { timestamps: true });
Formulario.belongsToMany(Area, { through: Formulario_Area, foreignKey: "id_formulario_seguridad_salud" });
Area.belongsToMany(Formulario, { through: Formulario_Area, foreignKey: "id_area" });

//relacion usuario - empleado
// Empleado.hasOne(Usuario, { foreignKey: 'cedula_empleado' });
// Usuario.belongsTo(Empleado, { foreignKey: 'cedula_empleado' });

//relacion uno a uno formulario - centro
Centro.hasOne(Formulario, { foreignKey: 'id_centro' });
Formulario.belongsTo(Centro, { foreignKey: 'id_centro' });
*/