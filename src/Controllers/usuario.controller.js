//importar los modelas y sus relaciones
import "../Database/relaciones.js";
import { Usuario } from "../Models/usuario.js"

//CRUD basico para el modelo Usuario
// Obtener la lista de usuarios
export const getAllUsuarios = async (req, res) => {
  const pagina = parseInt(req.query.pagina) || 1  ; // Obtiene el número de página desde la consulta, por defecto es 1
  const limite = 8;
  const offsetdinamic = (pagina - 1) * limite;
  try {
    const allUsuarios= await Usuario.findAndCountAll({
        order: [
        ['id_usuario', 'DESC']
      ],
      limit: limite,
      offset:offsetdinamic 
    });  
    res.json(allUsuarios);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Obtener un usuario en especifico
export const getUsuarioById = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const oneUsuario = await Usuario.findByPk(id_usuario);
    if (!oneUsuario)
      return res.status(404).json({ message: "Usuario no registrado" });
    res.json(oneUsuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crear un Usuario
export const createUsuario = async (req, res) => {
  const { nombres, apellidos, email, contrasenia } = req.body;
  try {
    const nuevoUsuario = await Usuario.create({
      nombres_usuario: nombres,
      apellidos_usuario: apellidos,      
      email_usuario: email,
      contrasenia_usuario: contrasenia
    });
    console.log("Nuevo Usuario Registrado");
    res.json(nuevoUsuario);   
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar un Usuario
export const updateUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const { newNombres, newApellidos, newEmail, newContrasenia } = req.body;
    const usuarioActualizado = await Usuario.findOne({
      where: { id_usuario }
    });
     // Validación
     if(!usuarioActualizado) {
      return res.status(404).json({mensaje: 'Comentario no encontrado'});
     }
    usuarioActualizado.nombres_usuario = newNombres;
    usuarioActualizado.apellidos_usuario  = newApellidos;
    usuarioActualizado.email_usuario  = newEmail;
    usuarioActualizado.contrasenia_usuario  = newContrasenia;
    if(await usuarioActualizado.save()) {
      res.json(usuarioActualizado);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Borrar un Usuario
export const deleteUsuario= async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const usuarioEliminado = await Usuario.destroy({
      where: {
        id_usuario: id_usuario,
      },
    });
    if(await usuarioEliminado.destroy()) {
      res.status(200).json({mensaje: 'Usuario eliminado'}) 
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};