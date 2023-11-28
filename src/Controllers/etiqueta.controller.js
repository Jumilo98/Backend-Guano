import "../Database/relaciones.js";
import { Etiqueta } from "../Models/etiqueta.js"

//CRUD basico para el modelo etiqueta
// Obtener la lista de etiquetas 
export const getAllEtiquetas  = async (req, res) => {
    try {
        const allEtiquetas =  await Etiqueta.findAll();
        res.json(allEtiquetas);
        console.log("Mostrando etiquetas resgistrados...");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener un producto en especifico 
export const getEtiquetaById = async (req, res) => {
    try {
      const { id_etiqueta } = req.params;
      const oneEtiqueta = await Etiqueta.findOne({
        where: { id_etiqueta}
      });
      if (!oneEtiqueta)
        return res.status(404).json({ message: "Eiqueta no registrada" });
      res.json(oneEtiqueta);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


export const createEtiqueta  = async (req, res) => {
    const articulo = req.params.id_articulo; // Accede al id_articulo de los parámetros de la ruta
    
    // Espera recibir un paramentro "precio" para crear el producto
    const { precio } = req.body;
    try {
        // Creando un nuevo objeto producto con el metodo create
        const nuevoProducto =  await Producto.create({
            precio_producto: precio,
            id_articulo: articulo
        });
        res.json(nuevoProducto);
        console.log("Nuevo producto creado");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
   
};

// Actualizar un producto
export const updateProducto = async (req, res) => {
    try {
      const { id_producto } = req.params;
      const { newPrecio} = req.body;
      const productoActualizado = await Producto.findOne({
        where: { id_producto }
      });
      productoActualizado.precio_producto = newPrecio;
      await productoActualizado.save();
      res.json(productoActualizado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Borrar un producto
  export const deleteProducto = async (req, res) => {
    try {
      const { id_producto } = req.params;
      await Producto.destroy({
        where: {
          id_producto: id_producto,
        },
      });
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };