import "../Database/relaciones.js";
import { Destino } from "../models/destino.js"

//CRUD basico para el modelo Destino
// Obtener la lista de destinos 
export const getAllDestinos  = async (req, res) => {
    try {
        const allDestinos =  await Destino.findAll();
        res.json(allDestinos);
        console.log("Mostrando destinos resgistrados...");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener un destino en especifico 
export const getDestinoById = async (req, res) => {
    try {
      const { id_destino } = req.params;
      const oneDestino = await Destino.findOne({
        where: { id_destino}
      });
      if (!oneDestino)
        return res.status(404).json({ message: "Destino no registrado" });
      res.json(oneDestino);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


export const createDestino  = async (req, res) => {

    // Espera recibir un paramentro "nombre" para crear el destino
    const { nombre, imagenes, etiqueta, descripcion, likes, ubicacion } = req.body;
    try {
        // Creando un nuevo objeto destino con el metodo create
        const nuevoDestino =  await Destino.create({
            nombre_destino: nombre,
            ubicacion_destino: ubicacion,
            descripcion_destino: descripcion,
            imagenes_destino: imagenes,
            likes_destino: likes,
            etiqueta_destino: etiqueta
        });
        res.json(nuevoDestino);
        console.log("Nuevo destino creado");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
   
};

// Actualizar un destino
export const updateDestino = async (req, res) => {
    try {
      const { id_destino } = req.params;
      const { newNombre, newDestino, newDescripcion, newImagenes, newLikes, newEtiqueta  } = req.body;
      const destinoActualizado = await Lacteo.findOne({
        where: { id_lacteo }
      });
      destinoActualizado.nombre_destino = newNombre;
      destinoActualizado.ubicacion_destino  = newDestino;
      destinoActualizado.descripcion_destino  = newDescripcion;
      destinoActualizado.imagenes_destino= newImagenes;
      destinoActualizado.likes_destino= newLikes;
      destinoActualizado.etiqueta_destino= newEtiqueta;
      await destinoActualizado.save();
      res.json(destinoActualizado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar un destino
  export const deleteDestino = async (req, res) => {
    try {
      const { id } = req.params;
      await Destino.destroy({
        where: {
          id_destino: id,
        },
      });
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };