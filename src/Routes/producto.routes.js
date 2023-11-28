import { Router } from 'express'
import {getAllProductos, getProductoById, createProducto, updateProducto, deleteProducto} from '../Controllers/producto.controller.js'


const router = Router();

//rutas de conexion al controlador producto

router.get('/productos', getAllProductos);
router.post('/producto', createProducto); 
router.put('/producto/:id', updateProducto); //id del producto
router.delete('/producto/:id', deleteProducto);//id del producto
router.get('/producto/:id', getProductoById);//id del producto

export default router