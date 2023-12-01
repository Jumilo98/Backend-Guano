import "../Database/relaciones.js";
import { Etiqueta } from "../Models/etiqueta.js"
import {Punto} from "../Models/punto.js"

//CRUD basico para el modelo etiqueta
// Obtener la lista de etiquetas 
export const getAllEtiquetas  = async (req, res) => {
    const pagina = parseInt(req.query.pagina) || 1  ; // Obtiene el número de página desde la consulta, por defecto es 1
    const limite = 8;
    const offsetdinamic = (pagina - 1) * limite;
    try {
        const allEtiquetas =  await Etiqueta.findAndCountAll({
          include: [
            { model: Punto,
              attibutes: ['nombre_punto']
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
export const getProductoByName = async (req, res) => {
  try {
    const { nombres_producto } = req.params;
    const oneProducto = await Producto.findOne({
      where: { nombres_producto: nombres_producto }, 
      include: [
        { model: Usuario,
          attibutes: ['email_usuario']
        },
        { model: Imagen,
          attibutes: ['id_imagen']
        },
        { model: Comentario,
          attibutes: ['id_comentario']
        }
      ],
      order: [
      ['nombres_producto', 'DESC']
    ],
    });
    if (!oneProducto)
      return res.status(404).json({ message: "Producto no registrado" });
    res.json(oneProducto);
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
            attibutes: ['nombre_punto']
          }
        ]
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
    const {id_punto} = req.params; // Accede al id_punto de los parámetros de la ruta
    // Espera recibir un paramentro "nombre" para crear la etiqueta
    const { nombre } = req.body;
    try {
        // Creando un nuevo objeto etiqueta con el metodo create
        const nuevoEtiqueta =  await Etiqueta.create({
            nombre_etiqueta: nombre,
            id_punto
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
      const { newNombre, id_punto} = req.body;
      const etiquetaActualizado = await Etiqueta.findOne({
        where: { id_etiqueta }
      });
      // Validación
      if(!etiquetaActualizado) {
        return res.status(404).json({mensaje: 'Comentario no encontrado'});
       }
      etiquetaActualizado.nombre_etiqueta = newNombre;
      id_punto
      if(await etiquetaActualizado.save()) {
        res.json(etiquetaActualizado);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar una etiqueta
  export const deleteEtiqueta = async (req, res) => {
    try {
      const { id_punto } = req.body;
      const { id_etiqueta } = req.params;
      const etiquetaEliminado = await Etiqueta.destroy({
        where: {
          id_etiqueta: id_etiqueta,
        },
      });
      id_punto
      if(await etiquetaEliminado.destroy()) {
        res.status(200).json({mensaje: 'Etiqueta eliminado'}) 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };