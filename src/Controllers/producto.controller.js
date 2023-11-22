import "../Database/relaciones.js";
import { Producto } from "../Models/producto.js"

//CRUD basico para el modelo producto
// Obtener la lista de productos 
export const getAllproductos  = async (req, res) => {
    try {
        const allProductos =  await Producto.findAll();
        res.json(allProductos);
        console.log("Mostrando productos resgistrados...");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

// Obtener un producto en especifico 
export const getProductoById = async (req, res) => {
    try {
      const { id_producto } = req.params;
      const oneProducto = await Producto.findOne({
        where: { id_producto}
      });
      if (!oneProducto)
        return res.status(404).json({ message: "Producto no registrado" });
      res.json(oneProducto);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


export const createProducto  = async (req, res) => {

    // Espera recibir un paramentro "precio" para crear el producto
    const { precio } = req.body;
    try {
        // Creando un nuevo objeto producto con el metodo create
        const nuevoProducto =  await Producto.create({
            precio_producto: precio,
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
      const { id } = req.params;
      await Producto.destroy({
        where: {
          id_producto: id,
        },
      });
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };