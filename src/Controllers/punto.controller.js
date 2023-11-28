import "../Database/relaciones.js";
import { Actividades } from "../Models/actividad.js"
import { Imagen } from "../Models/imagen.js";


//CRUD basico para el modelo Actividades

// Obtener la lista de Actividades 
export const getAllArticulos  = async (req, res) => {
    try {
        const allArticulos =  await Articulo.findAll({include: Imagen});
        res.json(allArticulos);
        console.log("Mostrando articulos registrados...");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener un articulo en especifico 
export const getArticuloById = async (req, res) => {
    try {
      const { id_articulo } = req.params;
      const oneArticulo = await Articulo.findOne({
        where: { id_articulo}
      });
      if (!oneArticulo)
        return res.status(404).json({ message: "Articulo no registrado" });
      res.json(oneArticulo);
      
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

//Crear un articulo
export const createArticulo = async (req, res) => {
    // Espera recibir un paramentro "nombre" para crear el articulo
    const { nombres, etiqueta, descripcion, likes } = req.body;
    try {
        // Creando un nuevo objeto articulo con el metodo create
        const nuevoArticulo =  await Articulo.create({
            nombres_articulo: nombres,            
            etiqueta_articulo: etiqueta,
            descripcion_articulo: descripcion,
            likes_articulo: likes,
            //id_etiqueta
        });
        res.json(nuevoArticulo);
        console.log("Nuevo Articulo creado");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Actualizar un articulo
export const updateArticulo = async (req, res) => {
    try {
      const { id_articulo } = req.params;
      const { newNombre, newEtiqueta, newDescripcion, newLikes } = req.body;
      const articuloActualizado = await Articulo.findOne({
        where: { id_articulo }
      });
      articuloActualizado.nombres_articulo = newNombre;
      articuloActualizado.etiqueta_articulo= newEtiqueta;
      articuloActualizado.descripcion_articulo  = newDescripcion;
      articuloActualizado.likes_articulo= newLikes;
      await articuloActualizado.save();
      res.json(articuloActualizado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar un articulo
  export const deleteArticulo = async (req, res) => {
    try {
      const { id_articulo } = req.params;
      await Articulo.destroy({
        where: {
          id_articulo: id_articulo,
        },
      });
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };