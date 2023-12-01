import "../Database/relaciones.js";
import { Punto } from "../Models/punto.js";
import { Imagen } from "../Models/imagen.js"
import { Usuario } from "../Models/usuario.js";
import { Comentario } from "../Models/comentario.js";
import { Etiqueta } from "../Models/etiqueta.js";

//CRUD basico para el modelo Punto

//obtengo los productos y puntos
export const getAll = async (req, res) => {
  const pagina = parseInt(req.query.pagina) || 1  ; // Obtiene el número de página desde la consulta, por defecto es 1
  const limite = 8;
  const offsetdinamic = (pagina - 1) * limite;  
  try {
        const allProductos =  await Producto.findAndCountAll({
          include: [
            { model: Usuario,
              attibutes: ['email_usuario']
            },
            { model: Imagen,
              attibutes: ['id_imagen']
            },           
          ],
          order: [
          ['id_producto', 'DESC']
        ],
        limit: limite,
        offset:offsetdinamic 
      })
      
      const allPuntos =  await Punto.findAndCountAll({
        include: [
          { model: Usuario,
            attibutes: ['email_usuario']
          },
          { model: Imagen,
            attibutes: ['id_imagen']
          },
          { model: Comentario,
            attibutes: ['id_comentario']
          },
          { model: Etiqueta,
            attibutes: ['id_etiqueta']
          }
        ],
        order: [
        ['id_punto', 'DESC']
      ],
      limit: limite,
      offset:offsetdinamic 
    })
      res.json({
        productos: allProductos,
        puntos: allPuntos
      });       
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener la lista de puntos por id 
export const getAllPuntos  = async (req, res) => {
  const pagina = parseInt(req.query.pagina) || 1  ; // Obtiene el número de página desde la consulta, por defecto es 1
  const limite = 8;
  const offsetdinamic = (pagina - 1) * limite;  
  try {
    const allPuntos =  await Punto.findAndCountAll({
      include: [
        { model: Usuario,
          attibutes: ['email_usuario']
        },
        { model: Etiqueta,
          attibutes: ['id_etiqueta']
        },
        { model: Imagen,
          attibutes: ['id_imagen']
        },
        { model: Comentario,
          attibutes: ['id_comentario']
        }
      ],
      order: [
      ['id_punto', 'DESC']
    ],
    limit: limite,
    offset:offsetdinamic 
  });  
  res.json(allPuntos);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener un articulo en especifico 
export const getPuntoByName = async (req, res) => {
  try {
    const { nombres_punto } = req.params;
    const onePunto = await Punto.findOne({
      where: { nombres_punto: nombres_punto }, 
      include: [
        { model: Usuario,
          attibutes: ['email_usuario']
        },
        { model: Etiqueta,
          attibutes: ['id_etiqueta']
        },
        { model: Imagen,
          attibutes: ['id_imagen']
        },
        { model: Comentario,
          attibutes: ['id_comentario']
        }
      ],
      order: [
      ['nombres_punto', 'DESC']
    ],
    });
    if (!onePunto)
      return res.status(404).json({ message: "Punto no registrado" });
    res.json(onePunto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Obtener un articulo en especifico 
export const getPuntoById = async (req, res) => {
    try {
      const { id_punto } = req.params;
    const onePunto = await Punto.findByPk(id_punto,{
      include: [
        { model: Usuario,
          attibutes: ['email_usuario']
        },
        { model: Etiqueta,
          attibutes: ['id_etiqueta']
        },
        { model: Imagen,
          attibutes: ['id_imagen']
        },
        { model: Comentario,
          attibutes: ['id_comentario']
        }
      ],
      order: [
      ['id_punto', 'DESC']
    ],
    });
    if (!onePunto)
      return res.status(404).json({ message: "Punto no registrado" });
    res.json(onePunto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Crear un punto
export const createPunto = async (req, res) => {
    // Espera recibir un paramentro "nombre" para crear el punto
    const { nombres, descripcion, likes, id_usuario, id_etiqueta } = req.body;
    try {
        // Creando un nuevo objeto punto con el metodo create
        const nuevoPunto =  await Punto.create({
            nombres_punto: nombres,    
            descripcion_punto: descripcion,
            likes_punto: likes,
            id_usuario,
            id_etiqueta
        });
        res.json(nuevoPunto);
        console.log("Nuevo Punto creado");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Actualizar un articulo
export const updatePunto = async (req, res) => {
    try {
      const { id_punto } = req.params;
      const { newNombre, newDescripcion, newLikes, id_usuario, id_etiqueta } = req.body;
      const puntoActualizado = await Punto.findOne({
        where: { id_punto }
      });
      // Validación
      if(!puntoActualizado) {
        return res.status(404).json({mensaje: 'Punto no encontrado'});
       }
      puntoActualizado.nombres_punto = newNombre;
      puntoActualizado.descripcion_punto  = newDescripcion;
      puntoActualizado.likes_punto= newLikes;
      id_usuario;
      id_etiqueta;
      if(await puntoActualizado.save()) {
        res.json(puntoActualizado); 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar un articulo
  export const deletePunto = async (req, res) => {
    const { id_punto } = req.params;
    try {      
      const puntoEliminado =  await Punto.destroy({
        where: {
          id_punto
        },
      });

      if(!puntoEliminado) {
        return res.status(404).json({
          mensaje: 'No se encontró el punto con ese id'
        });
      }

      if(puntoEliminado) {
        res.status(200).json({mensaje: 'Punto eliminado'}) 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };