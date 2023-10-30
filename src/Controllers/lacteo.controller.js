import "../Database/relaciones.js";
import { Lacteo } from "../models/lacteo.js"

//CRUD basico para el modelo Centro

// Obtener la lista de centros 
export const getAllLacteos  = async (req, res) => {
    try {
        const allLacteos =  await Lacteo.findAll();
        res.json(allLacteos);
        console.log("Mostrando lacteos registrados...");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener un lacteo en especifico 
export const getLacteoById = async (req, res) => {
    try {
      const { id_lacteo } = req.params;
      const oneLacteo = await Lacteo.findOne({
        where: { id_lacteo}
      });
      if (!oneLacteo)
        return res.status(404).json({ message: "Lacteo no registrado" });
      res.json(oneLacteo);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

//Crear un lacteo
export const createLacteo = async (req, res) => {
    // Espera recibir un paramentro "nombre" para crear el lacteo
    const { nombre, fecha_caducidad, descripcion, precio, imagenes, likes, etiqueta } = req.body;
    try {
        // Creando un nuevo objeto lacteo con el metodo create
        const nuevoLacteo=  await Lacteo.create({
            nombre_lacteo: nombre,
            fecha_caducidad_lacteo: fecha_caducidad,
            descripcion_lacteo: descripcion,
            precio_lacteo: precio,
            imagenes_lacteo: imagenes,
            likes_lacteo: likes,
            etiqueta_lacteo: etiqueta
        });
        res.json(nuevoLacteo);
        console.log("Nuevo lacteo creado");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
   
};

// Actualizar un lacteo
export const updateLacteo = async (req, res) => {
    try {
      const { id_lacteo } = req.params;
      const { newNombre, newFecha_caducidad, newDescripcion, newPrecio, newImagenes, newLikes, newEtiqueta  } = req.body;
      const lacteoActualizado = await Lacteo.findOne({
        where: { id_lacteo }
      });
      lacteoActualizado.nombre_lacteo = newNombre;
      lacteoActualizado.fecha_caducidad_lacteo  = newFecha_caducidad;
      lacteoActualizado.descripcion_lacteo  = newDescripcion;
      lacteoActualizado.precio_lacteo = newPrecio;
      lacteoActualizado.imagenes_lacteo= newImagenes;
      lacteoActualizado.likes_lacteo= newLikes;
      lacteoActualizado.etiqueta_lacteo= newEtiqueta;
      await lacteoActualizado.save();
      res.json(lacteoActualizado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar un lacteo
  export const deleteLacteo = async (req, res) => {
    try {
      const { id } = req.params;
      await Lacteo.destroy({
        where: {
          id_lacteo: id,
        },
      });
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };