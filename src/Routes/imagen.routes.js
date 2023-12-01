import {Router} from 'express'
import { getAllImagenesPr, getImagenPrById , createImagenPr , updateImagenPr ,  
         getAllImagenesP, getImagenPById , createImagenP , updateImagenP , deleteImagen
} from '../Controllers/imagen.controller.js'

const router =  Router ();

//Rutas de conexion al controlador imagen del producto
router.get('/productos/imagenes', getAllImagenesPr);
router.post('/producto/imagen/:id_producto', createImagenPr);//id del producto 
router.put('/producto/imagen/:id_producto/:id_imagen', updateImagenPr);//id del producto y la imagen
router.get('/producto/imagen/:id_producto/:id_imagen', getImagenPrById); //id de la imagen

//Rutas de conexion al controlador imagenes del punto
router.get('/puntos/imagenes', getAllImagenesP);
router.post('/punto/imagen/:id_punto', createImagenP);//id del punto 
router.put('/punto/imagen/id_punto/:id_imagen', updateImagenP);//id del punto y la imagen
router.get('/punto/imagen/:id_punto/:id_imagen', getImagenPById); //id del punto y la imagen

router.delete('/imagen/:id_imagen', deleteImagen);//id de la imagen

export default router