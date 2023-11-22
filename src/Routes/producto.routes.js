import {Router} from 'express'
import { getProductoById , createProducto , updateProducto , deleteProducto, getAllproductos} from '../Controllers/producto.controller.js'

const router =  Router ();


//Rutas de conexion al controlador Prodcuto
router.get('/productos', getAllproductos)
router.post('/producto', createProducto)
router.put('/producto/:id', updateProducto)
router.delete('/producto/:id', deleteProducto)
router.get('/producto/:id', getProductoById)

export default router