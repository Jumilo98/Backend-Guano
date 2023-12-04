import { Router } from 'express'
import {getAllProductos, getAll, getProductoById, getProductoByName, createProducto, updateProducto, deleteProducto} from '../Controllers/producto.controller.js'

const router = Router();

//rutas de conexion al controlador producto
router.get('/all/:pagina', getAll);
router.get('/productos/:pagina', getAllProductos);
router.get('/producto/:id_producto', getProductoById);//id del producto
router.get('/producto/nombre/:nombres_producto', getProductoByName)//todos los productos por nombre
router.post('/producto', createProducto);
router.put('/producto/:id_producto', updateProducto); //id del producto
router.delete('/producto/:id_producto', deleteProducto);//id del producto

export default router
