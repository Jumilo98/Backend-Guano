import {Router} from 'express'
import { getProductoById , createProducto , updateProducto , deleteProducto, getAllproductos} from '../Controllers/producto.controller.js'

const router =  Router ();


//Rutas de conexion al controlador Prodcuto
router.get('/productos', getAllproductos)
router.post('/producto/:id_articulo', createProducto)
router.put('/producto/:id_producto', updateProducto)
router.delete('/producto/:id_producto', deleteProducto)
router.get('/producto/:id_producto', getProductoById)

export default router