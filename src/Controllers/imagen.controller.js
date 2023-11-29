//importar los modelas y sus relaciones
import "../Database/relaciones.js";
import { Punto } from "../Models/punto.js";
import { Imagen } from "../Models/imagen.js"

import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';



//CRUD basico para el modelo Imagen
// Obtener la lista de imagenes 
export const getAllImagenes = async (req, res) => {
    try {
        const allImagenes =  await Imagen.findAll();
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
        where: { id_imagen}
      });
      if (!oneImagen)
        return res.status(404).json({ message: "Imagen no registrado" });
      res.json(oneImagen);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  // Configuración de Multer
  const upload = multer({
    dest: 'uploads/',
    limits: {
      fileSize: 50 * 1024 * 1024, // Limita el tamaño del archivo a 50 MB
    },
  });

  export const createImagen = async (req, res) => {

    const punto = req.params.id_punto; // Accede al id_articulo de los parámetros de la ruta

    // Multer procesará el archivo
    upload.single('imagen')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        // Asegúrate de que un archivo ha sido cargado
        if (!req.file) {
            return res.status(400).send('No se encontró ningún archivo para cargar.');
        }

        try {
            // Sube el archivo a Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);

            // Elimina el archivo subido del sistema de archivos local después de subirlo a Cloudinary
            fs.unlinkSync(req.file.path);

            // Crea un nuevo imagen
            const nuevoImagen = await Imagen.create({
                url_imagen: result.secure_url,
                id_imagen_cloudinary: result.public_id,
                id_punto: punto
            });

            // Envía la respuesta
            console.log("Nuevo imagen creado");
            console.log("Nuevo imagen creado asociado al artículo ID:", articulo);
            res.json({ url: result.secure_url 
                , cloudinary: result.public_id 
            });
        } catch (error) {
            if (req.file) fs.unlinkSync(req.file.path);
            res.status(500).json({ message: error.message });
        }
    });
};

// Actualizar un imagen
export const updateImagen = async (req, res) => {
    
    // Multer procesará el archivo
    upload.single('imagen')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: err.message});
        }

        // Asegúrate de que un archivo ha sido cargado
        if (!req.file) {
            return res.status(400).send('No se encontró ningún archivo para cargar.');
        }

        try {
            // Sube el archivo a Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);

           
            // Crea un nuevo imagen
            const { id_imagen } = req.params;

            const imagenActualizado = await Imagen.findOne({
              where: { id_imagen }
            });
            imagenActualizado.url_imagen = result.secure_url;
            imagenActualizado.id_imagen_cloudinary  = result.public_id;
            await imagenActualizado.save();
            res.json(imagenActualizado);

            // Envía la respuesta
            console.log("Nuevo imagen actualizada");
            res.json({ url: result.secure_url 
                , cloudinary: result.public_id 
            });
        } catch (error) {
            if (req.file) fs.unlinkSync(req.file.path);
            res.status(500).json({ message: error.message });
        }
    });    
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