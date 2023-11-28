import "../Database/relaciones.js";
import { Comentario } from "../Models/comentario.js"
import { Punto } from "../Models/punto.js"
import { Producto } from "../Models/producto.js";

//CRUD basico para el modelo Comentarios

// Obtener la lista de comentarios 
export const getAllComentarios  = async (req, res) => {
    try {
        const allComentarios =  await Comentario.findAll();
        res.json(allComentarios);
        console.log("Mostrando comentarios registrados...");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener un comentario en especifico 
export const getComentarioById = async (req, res) => {
    try {
      const { id_comentario } = req.params;
      const oneComentario = await Comentario.findOne({
        where: { id_comentario}
      });
      if (!oneComentario)
        return res.status(404).json({ message: "Comentario no registrado" });
      res.json(oneComentario);
      
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

//Crear un comentario
export const createComentario = async (req, res) => {
    // Espera recibir un paramentro "mensaje" para crear el comentario
    const { mensaje } = req.body;
    try {
        // Creando un nuevo objeto comentario con el metodo create
        const nuevoComentario =  await Comentario.create({
            mensaje_comentario: mensaje,     
        });
        res.json(nuevoComentario);
        console.log("Nuevo Comentario creado");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Actualizar un comentario
export const updateComentario = async (req, res) => {
    try {
      const { id_comentario } = req.params;
      const { newMensaje } = req.body;
      const comentarioActualizado = await Comentario.findOne({
        where: { id_comentario }
      });
      comentarioActualizado.mensaje_comentario = newMensaje;
      await comentarioActualizado.save();
      res.json(comentarioActualizado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar un comentario
  export const deleteComentario = async (req, res) => {
    try {
      const { id_comentario } = req.params;
      await Comentario.destroy({
        where: {
          id_comentario: id_comentario,
        },
      });
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };