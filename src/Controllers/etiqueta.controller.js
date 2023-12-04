import "../Database/relaciones.js";
import { Comentario } from "../Models/comentario.js";
import { Etiqueta } from "../Models/etiqueta.js"
import { Imagen } from "../Models/imagen.js";
import {Punto} from "../Models/punto.js"
import { Usuario } from "../Models/usuario.js";

//CRUD basico para el modelo etiqueta

// Obtener la lista de etiquetas 
export const getAllEtiquetas  = async (req, res) => {
    const {pagina} = req.params;
    const limite = 8;
    const offsetdinamic = (pagina - 1) * limite;
    try {
        const allEtiquetas =  await Etiqueta.findAndCountAll({
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
                { model: Comentario,
                  attibutes: ['id_comentario']
                }
              ]
            }            
          ],
          order: [
            ['id_etiqueta', 'DESC']
          ],
          limit: limite,
          offset:offsetdinamic 
        });        
        res.json(allEtiquetas);
      } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener un proucto en especifico por nombre 
export const getEtiquetaByName = async (req, res) => {
  try {
    const { nombre_etiqueta } = req.params;
    const oneEtiqueta = await Etiqueta.findOne({
      where: { nombre_etiqueta : nombre_etiqueta }, 
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
            { model: Comentario,
              attibutes: ['id_comentario']
            }
          ]
        }            
      ],
      order: [
        ['nombre_etiqueta', 'DESC']
      ],
    });
    if (!oneEtiqueta)
      return res.status(404).json({ message: "Etiqueta no registrado" });
    res.json(oneEtiqueta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}; 

// Obtener una etiqueta en especifico 
export const getEtiquetaById = async (req, res) => {
    try {
      const { id_etiqueta } = req.params;
      const oneEtiqueta = await Etiqueta.findByPk(id_etiqueta ,{
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
              { model: Comentario,
                attibutes: ['id_comentario']
              }
            ]
          }            
        ],
        order: [
          ['nombre_etiqueta', 'DESC']
        ],
      });
      if (!oneEtiqueta)
        return res.status(404).json({ message: "Eiqueta no registrada" });
        res.json(oneEtiqueta);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

//Crea una etiqueta para puntos
export const createEtiqueta  = async (req, res) => {
    // Espera recibir un paramentro "nombre" para crear la etiqueta
    const { nombre } = req.body;
    try {
        // Creando un nuevo objeto etiqueta con el metodo create
        const nuevoEtiqueta =  await Etiqueta.create({
            nombre_etiqueta: nombre,           
        });
        res.json(nuevoEtiqueta);
    } catch (error) {
        return res.status(500).json({message:error.message});
    } 
};

// Actualizar una etiqueta
export const updateEtiqueta = async (req, res) => {
    try {
      const { id_etiqueta } = req.params;
      const { newNombre} = req.body;
      const etiquetaActualizado = await Etiqueta.findOne({
        where: { id_etiqueta }
      });
      // Validación
      if(!etiquetaActualizado) {
        return res.status(404).json({mensaje: 'Comentario no encontrado'});
       }
      etiquetaActualizado.nombre_etiqueta = newNombre;
      if(await etiquetaActualizado.save()) {
        res.json(etiquetaActualizado);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar una etiqueta
  export const deleteEtiqueta = async (req, res) => {
    const { id_etiqueta } = req.params;
    try {        
      const etiquetaEliminado = await Etiqueta.destroy({
        where: {
          id_etiqueta
        },
      });      

      if(!etiquetaEliminado) {
        return res.status(404).json({
          mensaje: 'No se encontró la etiqueta con ese id'
        });
      }

      if(etiquetaEliminado) {
        res.status(200).json({mensaje: 'Etiqueta eliminado'}) 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };