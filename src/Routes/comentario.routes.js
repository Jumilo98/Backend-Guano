import {Router} from 'express';
import { getAllComentariosPr, getComentarioPrById , createComentarioPr , updateComentarioPr , deleteComentarioPr, 
         getAllComentariosP, getComentarioPById , createComentarioP , updateComentarioP , deleteComentarioP
} from '../Controllers/comentario.controller.js';

const router =  Router ();


//Rutas de conexion al controlador comentario Productos
router.get('/productos/comentarios', getAllComentariosPr);
router.post('/producto/comentario/:id_producto', createComentarioPr);//id del producto
router.put('/producto/comentario/:id_comentario', updateComentarioPr); //id del comentario
router.delete('/producto/comentario/:id_comentario', deleteComentarioPr);//id del comentario
router.get('/producto/comentario/:id_comentario', getComentarioPrById); //id del comentario

//Rutas de conexion al controlador comentario Punto
router.get('/puntos/comentarios', getAllComentariosP);
router.post('/punto/comentario/:id_punto', createComentarioP);//id del punto
router.put('/punto/comentario/:id_comentario', updateComentarioP); //id del comentario
router.delete('/punto/comentario/:id_comentario', deleteComentarioP);//id del comentario
router.get('/punto/comentario/:id_comentario', getComentarioPById); // id del cometnario

export default router