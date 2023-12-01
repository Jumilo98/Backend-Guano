import { Router } from 'express'
import {getAllProductos, getAll, getProductoById, getProductoByName, createProducto, updateProducto, deleteProducto} from '../Controllers/producto.controller.js'

const router = Router();

//rutas de conexion al controlador producto
router.get('/productos', getAllProductos);
router.get('/all', getAll);
router.post('/producto', createProducto);
router.put('/producto/:id_producto', updateProducto); //id del producto
router.delete('/producto/:id_producto', deleteProducto);//id del producto
router.get('/producto/:id_producto', getProductoById);//id del producto
router.get('/producto/nombre/:nombres_producto', getProductoByName)//todos los productos por nombre

export default router
