import {Router} from 'express'
import { getAllImagenes, getImagenById , createImagen , updateImagen , deleteImagen } from '../Controllers/imagen.controller.js'

const router =  Router ();


//Rutas de conexion al controlador imagen
router.get('/imagenes', getAllImagenes)
router.post('/imagen/:id', createImagen);//id del producto/punto
router.put('/imagen/:id', updateImagen)//id de la imagen
router.delete('/imagen/:id', deleteImagen)//id de la imagen
router.get('/imagen/:id', getImagenById)//id de la imagen

export default router