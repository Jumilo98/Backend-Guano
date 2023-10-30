//importar los modelas y sus relaciones
import "../database/relaciones.js";
import { Contacto } from "../models/contactanos.js"

//CRUD basico para el modelo Contactano
// Obtener la lista de destinos 
export const getAllContactanos  = async (req, res) => {
    try {
        const allContactanos =  await Contacto.findAll();
        res.json(allContactanos);
        console.log("Mostrando contactos resgistrados...");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener un contacto en especifico 
export const getContactoById = async (req, res) => {
    try {
      const { id_contacto } = req.params;
      const oneContacto = await Contacto.findOne({
        where: { id_contacto}
      });
      if (!oneContacto)
        return res.status(404).json({ message: "Contacto no registrado" });
      res.json(oneContacto);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


export const createContacto  = async (req, res) => {

    // Espera recibir un paramentro "nombre" para crear el contacto
    const { nombre, apellido, correo, telefono, mensaje, fecha } = req.body;
    try {
        // Creando un nuevo contacto con el metodo create
        const nuevoContacto =  await Contacto.create({
            nombre_contacto: nombre,
            apellido_contacto: apellido,
            correo_contacto: correo,
            telefono_contacto: telefono,
            mensaje_contacto: mensaje,
            fecha_contacto: fecha
        });
        res.json(nuevoContacto);
        console.log("Nuevo contacto creado");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
   
};

// Actualizar un contacto
export const updateContacto = async (req, res) => {
    try {
      const { id_contacto } = req.params;
      const { newNombre, newApellido, newCorreo, newTelefono, newMensaje, newFecha  } = req.body;
      const contactoActualizado = await Contacto.findOne({
        where: { id_contacto }
      });
      contactoActualizado.nombre_contacto = newNombre;
      contactoActualizado.apellido_contacto  = newApellido;
      contactoActualizado.correo_contacto  = newCorreo;
      contactoActualizado.telefono_contacto= newTelefono;
      contactoActualizado.mensaje_contacto= newMensaje;
      contactoActualizado.fecha_contacto= newFecha;
      await contactoActualizado.save();
      res.json(contactoActualizado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar un destino
  export const deleteContacto = async (req, res) => {
    try {
      const { id } = req.params;
      await Contacto.destroy({
        where: {
          id_contacto: id,
        },
      });
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };