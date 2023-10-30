//importar los modelas y sus relaciones
import "../database/relaciones.js";
import { Administrador } from "../models/administrador.js"

//CRUD basico para el modelo Administrador
// Obtener la lista de administradores
export const getAllAdministradores = async (req, res) => {
  try {
    const allAdministradores = await Administrador.findAll();
    res.json(allAdministradores);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Obtener un administrador en especifico
export const getAdministradorById = async (req, res) => {
  try {
    const { id_administrador } = req.params;
    const oneAdministrador = await Administrador.findOne({
      where: { id_administrador}
    });
    if (!oneAdministrador)
      return res.status(404).json({ message: "Administrador no registrado" });
    res.json(oneAdministrador);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crear un Administrador
export const createAdministrador = async (req, res) => {
  const { contraseña, nombre, correo } = req.body;
  try {
    const nuevoAdministrador = await Administrador.create({
      nombre_administrador: nombre,
      contraseña_administrador: contraseña,
      correo_administrador: correo
    });
    res.json(nuevoAdministrador);
    console.log("Nuevo Administrador Registrado");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar un Administrador
export const updateAdministrador = async (req, res) => {
  try {
    const { id_administrador } = req.params;
    const { newNombre, newContraseña, newCorreo } = req.body;
    const administradorActualizado = await Administrador.findOne({
      where: { id_administrador }
    });
    administradorActualizado.nombre_administrador = newNombre;
    administradorActualizado.contraseña_administrador  = newContraseña;
    administradorActualizado.correo_administrador  = newCorreo;
    await administradorActualizado.save();
    res.json(administradorActualizado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Borrar un administrador
export const deleteAdministrador = async (req, res) => {
  try {
    const { id } = req.params;
    await Administrador.destroy({
      where: {
        id_administrador: id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};