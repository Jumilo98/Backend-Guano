//importar los modelas y sus relaciones
import "../Database/relaciones.js";
import { Articulo } from "../Models/articulo.js";
import { Imagen } from "../Models/imagen.js"

//CRUD basico para el modelo Imagen
// Obtener la lista de imagenes 
export const getAllImagenes = async (req, res) => {
    try {
        const allImagenes =  await Imagen.findAll({include: [{
            model: Articulo,
            attributes: ["id_articulo"],
            required: true,
        }]});
        res.json(allImagenes);
        console.log("Mostrando imagens resgistrados...");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener un imagen en especifico 
export const getImagenById = async (req, res) => {
    try {
      const { id_imagen } = req.params;
      const oneImagen = await Imagen.findOne({
        where: { id_imagen},
        include: [{
          model: Articulo,
          attributes: ["id_articulo"],
          required: true,
      }]
      });
      if (!oneImagen)
        return res.status(404).json({ message: "Imagen no registrado" });
      res.json(oneImagen);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


export const createImagen  = async (req, res) => {

    // Espera recibir un paramentro "nombre" para crear el imagen
    const { url, cloudinary } = req.body;
    const articulo = req.params.id_articulo; // Accede al id_articulo de los parámetros de la ruta

    try {
        // Creando un nuevo imagen con el metodo create
        const nuevoImagen =  await Imagen.create({
            url_imagen: url,
            id_imagen_cloudinary: cloudinary,
            id_articulo: articulo
        });
        res.json(nuevoImagen);
        console.log("Nuevo imagen creado");
        console.log("Nuevo imagen creado asociado al artículo ID:", articulo);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }   
};

// Actualizar un imagen
export const updateImagen = async (req, res) => {
    try {
      const { id_imagen } = req.params;
      const { newUrl, newCloudinary } = req.body;
      const imagenActualizado = await Imagen.findOne({
        where: { id_imagen },
        include: [{
          model: Articulo,
          attributes: ["id_articulo"],
          required: true,
      }]
      });
      imagenActualizado.url_imagen = newUrl;
      imagenActualizado.id_imagen_cloudinary  = newCloudinary;
      await imagenActualizado.save();
      res.json(imagenActualizado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar un producto
  export const deleteImagen = async (req, res) => {
    try {
      const { id_imagen } = req.params;
      await Imagen.destroy({
        where: {
          id_imagen: id_imagen,
        },
      });
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };