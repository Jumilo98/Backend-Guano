//importar los modelas y sus relaciones
import "../Database/relaciones.js";
import { Imagen } from "../Models/imagen.js"
import { Punto } from "../Models/punto.js";
import { Producto } from "../Models/producto.js";
import { Usuario } from "../Models/usuario.js";
import { Etiqueta } from "../Models/etiqueta.js";
import { Comentario } from "../Models/comentario.js";

import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

//CRUD basico para el modelo Imagen

// Obtener la lista de imagenes
export const getAllImagenes = async (req, res) => {
  const {pagina} = req.params;
  const limite = 8;
  const offsetdinamic = (pagina - 1) * limite;
  try {
      const allImagenes =  await Imagen.findAndCountAll({
        include: [
          { model: Punto,
            attibutes: ['nombre_punto'],
            include:[
              { model: Etiqueta,
                attibutes: ['id_etiqueta']
              },
              { model: Usuario,
                attibutes: ['id_usuario']
              },
              { model: Comentario,
                attibutes: ['id_comentario']
              }
            ]
          },
          { model: Producto,
            attibutes: ['nombre_producto'],
            include:[             
              { model: Usuario,
                attibutes: ['id_usuario']
              }
            ]
          },
        ],
        order: [
          ['id_imagen', 'DESC']
        ],
        limit: limite,
        offset:offsetdinamic 
      }); 
      res.json(allImagenes);
  } catch (error) {
      return res.status(500).json({message:error.message});
  }
};

// Obtener un imagen en especifico de puntos
export const getImagenById = async (req, res) => {
  const { id_imagen} = req.params;
  try {
    const oneImagen = await Imagen.findByPk(id_imagen,{
      include: [
        { model: Punto,
          attibutes: ['nombre_punto'],
          include:[
            { model: Etiqueta,
              attibutes: ['id_etiqueta']
            },
            { model: Usuario,
              attibutes: ['id_usuario']
            },
            { model: Comentario,
              attibutes: ['id_comentario']
            }
          ]
        },
        { model: Producto,
          attibutes: ['nombre_producto'],
          include:[             
            { model: Usuario,
              attibutes: ['id_usuario']
            }
          ]
        },
      ],
      order: [
        ['id_imagen', 'DESC']
      ],
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

  //Crea la imagen para un producto
  export const createImagenPr = async (req, res) => {
    const {id_producto} = req.params; // las foreign keys se les escribe tal y como son
    const producto = await Producto.findByPk(id_producto);
    if (!producto)
            return res.status(404).json({ message: "Producto no encontrado" });
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
                id_producto
            });
            
            // Envía la respuesta
            console.log("Nuevo imagen creado asociado al producto ID:", id_producto);
            res.json( nuevoImagen);
        } catch (error) {
            if (req.file) fs.unlinkSync(req.file.path);
            res.status(500).json({ message: error.message });
        }
    });
};
 //Crea la imagen para un punto
export const createImagenP = async (req, res) => {
  const {id_punto} = req.params; // Accede al id_articulo de los parámetros de la ruta
  const punto = await Punto.findByPk(id_punto);
    if (!punto)
            return res.status(404).json({ message: "Punto no encontrado" });
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
          //fs.unlinkSync(req.file.path);
          // Crea un nuevo imagen
          const nuevoImagen = await Imagen.create({
              url_imagen: result.secure_url,
              id_imagen_cloudinary: result.public_id,
              id_punto
          });
          // Envía la respuesta
          console.log("Nuevo imagen creado asociado al artículo ID:", id_punto);
          res.json(nuevoImagen);

      } catch (error) {
          if (req.file) fs.unlinkSync(req.file.path);
          res.status(500).json({ message: error.message });
      }
  });
};

// Actualizar un imagen para producto
export const updateImagenPr = async (req, res) => {
  const { id_imagen, id_producto } = req.params;  
  const producto = await Producto.findByPk(id_producto);
    if (!producto)
            return res.status(404).json({ message: "Producto no encontrado" });
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
            const imagenActualizado = await Imagen.findOne({
              where: { id_imagen }
            });
            imagenActualizado.url_imagen = result.secure_url;
            imagenActualizado.id_imagen_cloudinary  = result.public_id;
            id_producto
            await imagenActualizado.save();
            // Envía la respuesta
            console.log("Nuevo imagen actualizada");
            res.json(imagenActualizado);
        } catch (error) {
            if (req.file) fs.unlinkSync(req.file.path);
            res.status(500).json({ message: error.message });
        }
    });    
  };
  // Actualizar un imagen para puntos
export const updateImagenP = async (req, res) => {
  const { id_imagen, id_punto } = req.params;
  const punto = await Punto.findByPk(id_punto);
  if (!punto)
    return res.status(404).json({ message: "Punto no encontrado" });
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
          const imagenActualizado = await Imagen.findOne({
            where: { id_imagen }
          });
          imagenActualizado.url_imagen = result.secure_url;
          imagenActualizado.id_imagen_cloudinary  = result.public_id;
          id_punto
          await imagenActualizado.save();
          // Envía la respuesta
          console.log("Nuevo imagen actualizada");
          res.json(imagenActualizado);
      } catch (error) {
          if (req.file) fs.unlinkSync(req.file.path);
          res.status(500).json({ message: error.message });
      }
  });    
};

  // Borrar una imagen de puntos
  export const deleteImagen = async (req, res) => {
    const { id_imagen } = req.params;
    try {      
      const imagenEliminado = await Imagen.destroy({
        where: {
          id_imagen
        },
      });
      
      if(!imagenEliminado) {
        return res.status(404).json({
          mensaje: 'No se encontró la imagen con ese id'
        });
      }

      if(imagenEliminado) {
        res.status(200).json({mensaje: 'Imagen eliminado'}) 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };