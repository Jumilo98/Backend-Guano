import {Router} from 'express'
import { getAllImagenes, getImagenById , createImagen , updateImagen , deleteImagen } from '../Controllers/imagen.controller.js'

const router =  Router ();


//Rutas de conexion al controlador imagen
router.get('/imagenes', getAllImagenes)
router.post('/imagen', createImagen)
router.put('/imagen/:id', updateImagen)
router.delete('/imagen/:id', deleteImagen)
router.get('/imagen/:id', getImagenById)

export default router