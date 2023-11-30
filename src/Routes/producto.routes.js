import { Router } from 'express'
import {getAllProductos, getProductoById, getProductoByName, createProducto, updateProducto, deleteProducto} from '../Controllers/producto.controller.js'

const router = Router();

//rutas de conexion al controlador producto
router.get('/productos', getAllProductos)
router.post('/producto', createProducto);
router.put('/producto/:id_producto', updateProducto); //id del producto
router.delete('/producto/:id_producto', deleteProducto);//id del producto
router.get('/producto/:id_producto', getProductoById);//id del producto
router.get('/producto/:nombres_producto', getProductoByName)//todos los productos por nombre

export default router