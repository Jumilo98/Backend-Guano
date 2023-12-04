import {Router} from 'express';
import { getAllComentarios, getComentarioById , createComentario , updateComentario , deleteComentario} from '../Controllers/comentario.controller.js';

const router =  Router ();

//Rutas de conexion al controlador comentario Punto
router.get('/comentarios/:pagina', getAllComentarios);
router.get('/comentario/:id_comentario', getComentarioById); // id del cometnario
router.post('/comentario/:id_punto', createComentario);//id del punto
router.put('/comentario/:id_comentario', updateComentario); //id del comentario
router.delete('/comentario/:id_comentario', deleteComentario);//id del comentario

export default router