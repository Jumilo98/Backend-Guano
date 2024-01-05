//importar los modelas y sus relaciones
import "../Database/relaciones.js";
import { Comentario } from "../Models/comentario.js";
import { Punto } from "../Models/punto.js";
import { Usuario } from "../Models/usuario.js"
import { Producto } from "../Models/producto.js";
import { Etiqueta } from "../Models/etiqueta.js";
import { Imagen } from "../Models/imagen.js";
import { Op } from "sequelize";

//CRUD basico para el modelo Usuario
// Obtener la lista de usuarios
export const getAllUsuarios = async (req, res) => {
  const {pagina} = req.params;
  const limite = 8;
  const offsetdinamic = (pagina - 1) * limite;
  try {
    const allUsuarios= await Usuario.findAndCountAll({
      include: [
        { model: Producto,
          attibutes: ['id_producto'],
          include: [                        
            { model: Imagen,
              attibutes: ['id_imagen']
            }
          ]
        },
        { model: Punto,
          attibutes: ['id_punto'],
          include: [                        
            { model: Comentario,
              attibutes: ['id_comentario']
            },
            { model: Etiqueta,
              attibutes: ['id_etiqueta']
            },
            { model: Imagen,
              attibutes: ['id_imagen']
            }
          ]
        }
      ],  
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

//Obtener lista solo de usuarios
export const getOnlyUsuarios = async (req, res) => {
  const {pagina} = req.params;
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

//Obtener ususario por email
export const getUsersByEmail = async (req, res) => {
  const {email_user} = req.params;
  try {
    const allUsuarios= await Usuario.findOne({
      where: { email_usuario: { [Op.iLike]: `${email_user}`} },
      order: [
        ['id_usuario', 'DESC']
      ],
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
    const oneUsuario = await Usuario.findByPk(id_usuario,{
      include: [
        { model: Producto,
          attibutes: ['id_producto'],
          include: [                        
            { model: Imagen,
              attibutes: ['id_imagen']
            }
          ]
        },
        { model: Punto,
          attibutes: ['id_punto'],
          include: [                        
            { model: Comentario,
              attibutes: ['id_comentario']
            },
            { model: Etiqueta,
              attibutes: ['id_etiqueta']
            },
            { model: Imagen,
              attibutes: ['id_imagen']
            }
          ]
        }
      ],  
      order: [
        ['id_usuario', 'DESC']
      ],
    }); 
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
  const { id_usuario } = req.params;
  try {    
    const usuarioEliminado = await Usuario.destroy({
      where: {
        id_usuario
      },
    });

    if(!usuarioEliminado) {
      return res.status(404).json({
        mensaje: 'No se encontró el usuario con ese id'
      });
    }

    if(usuarioEliminado) {
      res.status(200).json({mensaje: 'Usuario eliminado'}) 
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};