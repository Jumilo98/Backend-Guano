import "../Database/relaciones.js";
import { Producto } from "../Models/producto.js";
import { Comentario } from "../Models/comentario.js";
import { Imagen } from "../Models/imagen.js";
import { Usuario } from "../Models/usuario.js";
import { Punto } from "../Models/punto.js";
import { Etiqueta } from "../Models/etiqueta.js";

//CRUD basico para el modelo producto

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
            { model: Comentario,
              attibutes: ['id_comentario']
            }
          ],
          order: [
          ['id_producto', 'DESC']
        ],
        limit: limite,
        offset:offsetdinamic 
      });  
      
      res.json(allProductos);        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener la lista de productos por id
export const getAllProductos  = async (req, res) => {
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
            { model: Comentario,
              attibutes: ['id_comentario']
            }
          ],
          order: [
          ['id_producto', 'DESC']
        ],
        limit: limite,
        offset:offsetdinamic 
      });  
      res.json(allProductos);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener un proucto en especifico por nombre 
export const getProductoByName = async (req, res) => {
  try {
    const { nombres_producto } = req.params;
    const oneProducto = await Producto.findAll({
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

// Obtener un articulo en especifico por id
export const getProductoById = async (req, res) => {
    try {
      const { id_producto } = req.params;
      const oneProducto = await Producto.findOne(id_producto,{
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
        ['id_producto', 'DESC']
      ],
      });
      if (!oneProducto)
        return res.status(404).json({ message: "Producto no registrado" });
      res.json(oneProducto);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

//Crear un articulo
export const createProducto = async (req, res) => {
    // Espera recibir un paramentro "nombre" para crear el articulo
    const { nombres, etiqueta, precio, descripcion, likes, id_usuario } = req.body;
    try {
        // Creando un nuevo objeto producto con el metodo create
        const nuevoProducto =  await Producto.create({
            nombres_producto: nombres,            
            etiqueta_producto: etiqueta,
            precio_producto: precio,
            descripcion_producto: descripcion,
            likes_producto: likes,
            id_usuario
        });
        res.json(nuevoProducto);
        console.log("Nuevo Producto creado");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Actualizar un producto
export const updateProducto = async (req, res) => {
    try {
      const { id_producto } = req.params;
      const { newNombre, newEtiqueta, newPrecio, newDescripcion, newLikes, id_usuario } = req.body;
      const productoActualizado = await Producto.findOne({
        where: { id_producto }
      });
      // Validación
      if(!productoActualizado) {
        return res.status(404).json({mensaje: 'Producto no encontrado'});
       }
      productoActualizado.nombres_producto = newNombre;
      productoActualizado.etiqueta_producto= newEtiqueta;
      productoActualizado.precio_producto  = newPrecio;
      productoActualizado.descripcion_producto  = newDescripcion;
      productoActualizado.likes_producto= newLikes;
      id_usuario;
      if(await productoActualizado.save()) {
        res.json(productoActualizado); 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar un articulo
  export const deleteProducto = async (req, res) => {
    const { id_producto } = req.params;
    try {      
      const productoEliminado = await Producto.destroy({
        where: {
          id_producto: id_producto,
        },
      });
      if(await productoEliminado.destroy()) {
        res.status(200).json({mensaje: 'Producto eliminado'}) 
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };