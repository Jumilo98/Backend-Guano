import {Router} from 'express'
import { createImagenPr , updateImagenPr ,  
         getAllImagenes, getImagenById , createImagenP , updateImagenP , deleteImagen
} from '../Controllers/imagen.controller.js'

const router =  Router ();

//Rutas de conexion al controlador imagen del producto
router.post('/producto/imagen/:id_producto', createImagenPr);//id del producto 
router.put('/producto/imagen/:id_producto/:id_imagen', updateImagenPr);//id del producto y la imagen

//Rutas de conexion al controlador imagenes del punto
router.post('/punto/imagen/:id_punto', createImagenP);//id del punto 
router.put('/punto/imagen/:id_punto/:id_imagen', updateImagenP);//id del punto y la imagen

router.get('/imagenes/:pagina', getAllImagenes);
router.get('/imagen/:id_imagen', getImagenById); //id de la imagen
router.delete('/imagen/:id_imagen', deleteImagen);//id de la imagen

export default router