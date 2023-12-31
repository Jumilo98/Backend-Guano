import "../Database/relaciones.js";
import { Comentario } from "../Models/comentario.js"
import { Etiqueta } from "../Models/etiqueta.js";
import { Imagen } from "../Models/imagen.js";
import { Punto } from "../Models/punto.js"
import { Usuario } from "../Models/usuario.js";

  //CRUD basico para el modelo Comentarios
    // Obtener la lista de comentarios de punto
    export const getAllComentarios  = async (req, res) => {
      const {pagina} = req.params;
      const limite = 8;
      const offsetdinamic = (pagina - 1) * limite;
      try {
          const allComentarios =  await Comentario.findAndCountAll({
            include: [
              { model: Punto,
                attibutes: ['nombre_punto'],
                include:[
                  { model: Imagen,
                    attibutes: ['id_imagen']
                  },
                  { model: Usuario,
                    attibutes: ['id_usuario']
                  },
                  { model: Etiqueta,
                    attibutes: ['id_etiqueta']
                  }
                ]
              }            
            ],
            order: [
              ['id_comentario', 'DESC']
            ],
            limit: limite,
            offset:offsetdinamic 
          });
          res.json(allComentarios);
        } catch (error) {
          return res.status(500).json({message:error.message});
      }
    };

// Obtener un comentario en especifico de puntos
export const getComentarioById = async (req, res) => {
  const { id_comentario } = req.params;
  try {    
    const oneComentario = await Comentario.findByPk(id_comentario,{
      include: [
        { model: Punto,
          attibutes: ['nombre_punto'],
          include:[
            { model: Imagen,
              attibutes: ['id_imagen']
            },
            { model: Usuario,
              attibutes: ['id_usuario']
            },
            { model: Etiqueta,
              attibutes: ['id_etiqueta']
            }
          ]
        }            
      ],
      order: [
        ['id_comentario', 'DESC']
      ],
    });
    if (!oneComentario)
      return res.status(404).json({ message: "Comentario no registrado" });
      res.json(oneComentario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

  //Crear un comentario para productos
  export const createComentario = async (req, res) => {
    // Espera recibir un paramentro "mensaje" para crear el comentario
    const { id_punto } = req.params; 
    const { mensaje } = req.body; // las foreign keys se les escribe tal y como son
    try {
        // Creando un nuevo objeto comentario con el metodo create
        const nuevoComentario =  await Comentario.create({
            mensaje_comentario: mensaje,     
            id_punto
        });
        res.json(nuevoComentario);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
  };
 
  // Actualizar un comentario de punto
  export const updateComentario = async (req, res) => {
    const { id_comentario } = req.params; 
    try {
      const { newMensaje } = req.body;
      const comentarioActualizado = await Comentario.findOne({
        where: { id_comentario }
      });
      // Validación
      if(!comentarioActualizado) {
       return res.status(404).json({mensaje: 'Comentario no encontrado'});
      }
      comentarioActualizado.mensaje_comentario = newMensaje;
      if(await comentarioActualizado.save()) {
        res.json(comentarioActualizado); 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

   // Borrar un comentario de punto
   export const deleteComentario = async (req, res) => {
    const { id_comentario } = req.params; 
    try {
      const comentarioEliminado = await Comentario.destroy({
        where: {
          id_comentario
        },
      });
      
      if(!comentarioEliminado) {
        return res.status(404).json({
          mensaje: 'No se encontró el comentario con ese id'
        });
      }

      if(comentarioEliminado) {
        res.status(200).json({mensaje: 'Comentario eliminado'}) 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };