import {Router} from 'express'
import { getAllImagenes, getImagenById , createImagen , updateImagen , deleteImagen } from '../Controllers/imagen.controller.js'

const router =  Router ();

//Rutas de conexion al controlador imagen
router.get('/imagenes', getAllImagenes);
router.post('/imagen/', createImagen);
router.put('/imagen/:id/:id', updateImagen);//id del producto o punto y //id de la imagen
router.delete('/imagen/:id', deleteImagen);//id de la imagen
router.get('/imagen/:id/:id', getImagenById);//id del producto o punto y //id de la imagen

export default router