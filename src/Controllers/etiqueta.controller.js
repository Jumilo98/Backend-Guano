import "../Database/relaciones.js";
import { Etiqueta } from "../Models/etiqueta.js"
import {Punto} from "../Models/punto.js"

//CRUD basico para el modelo etiqueta
// Obtener la lista de etiquetas 
export const getAllEtiquetas  = async (req, res) => {
    try {
        const allEtiquetas =  await Etiqueta.findAll();
        res.json(allEtiquetas);
        console.log("Mostrando etiquetas resgistrados...");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener una etiqueta en especifico 
export const getEtiquetaById = async (req, res) => {
    try {
      const { id_etiqueta } = req.params;
      const oneEtiqueta = await Etiqueta.findOne({
        where: { id_etiqueta}
      });
      if (!oneEtiqueta)
        return res.status(404).json({ message: "Eiqueta no registrada" });
      res.json(oneEtiqueta);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


export const createEtiqueta  = async (req, res) => {
    const punto = req.params.id_punto; // Accede al id_punto de los parámetros de la ruta
    
    // Espera recibir un paramentro "nombre" para crear la etiqueta
    const { nombre } = req.body;
    try {
        // Creando un nuevo objeto etiqueta con el metodo create
        const nuevoEtiqueta =  await Etiqueta.create({
            nombre_etiqueta: nombre,
            id_punto: id_punto
        });
        res.json(nuevoEtiqueta);
        console.log("Nueva Etiqueta creada");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
   
};

// Actualizar una etiqueta
export const updateEtiqueta = async (req, res) => {
    try {
      const { id_punto } = req.params;
      const { newNombre} = req.body;
      const etiquetaActualizado = await Etiqueta.findOne({
        where: { id_etiqueta }
      });
      etiquetaActualizado.nombre_etiqueta = newNombre;
      etiquetaActualizado.id_punto = id_punto;
      await etiquetaActualizado.save();
      res.json(etiquetaActualizado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar una etiqueta
  export const deleteEtiqueta = async (req, res) => {
    try {
      const { id_etiqueta } = req.params;
      await Etiqueta.destroy({
        where: {
          id_etiqueta: id_etiqueta,
        },
      });
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };