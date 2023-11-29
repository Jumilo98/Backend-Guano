import {Router} from 'express'
import { getAllImagenesPr, getImagenPrById , createImagenPr , updateImagenPr , deleteImagenPr, 
         getAllImagenesP, getImagenPById , createImagenP , updateImagenP , deleteImagenP 
} from '../Controllers/imagen.controller.js'

const router =  Router ();

//Rutas de conexion al controlador imagen del producto
router.get('/productos/imagenes', getAllImagenesPr);
router.post('/producto/imagen/:id_producto', createImagenPr);//id del producto 
router.put('/producto/imagen/:id_producto/:id_imagen', updateImagenPr);//id del producto y la imagen
router.delete('/producto/imagen/:id_producto/:id_imagen', deleteImagenPr);//id de la imagen
router.get('/producto/imagen/:id_producto/:id_imagen', getImagenPrById); //id de la imagen

//Rutas de conexion al controlador imagenes del punto
router.get('/puntos/imagenes', getAllImagenesP);
router.post('/punto/imagen/:id_punto', createImagenP);//id del punto 
router.put('/punto/imagen/id_punto/:id_imagen', updateImagenP);//id del punto y la imagen
router.delete('/punto/imagen/id_punto/:id_imagen', deleteImagenP);//id del punto y la imagen
router.get('/punto/imagen/:id_punto/:id_imagen', getImagenPById); //id del punto y la imagen

export default router