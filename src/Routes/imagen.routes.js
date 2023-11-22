import {Router} from 'express'
import { getAllImagenes, getImagenById , createImagen , updateImagen , deleteImagen } from '../Controllers/imagen.controller.js'

const router =  Router ();


//Rutas de conexion al controlador imagen
router.get('/imagenes', getAllImagenes)
router.post('/imagen/:id_articulo', createImagen)
router.put('/imagen/:id_imagen', updateImagen)
router.delete('/imagen/:id_imagen', deleteImagen)
router.get('/imagen/:id_imagen', getImagenById)

export default router