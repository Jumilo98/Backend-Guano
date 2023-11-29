import {Router} from 'express';
import { getAllComentarios, getComentarioById , createComentario , updateComentario , deleteComentario } from '../Controllers/comentario.controller.js';

const router =  Router ();


//Rutas de conexion al controlador comentario
router.get('/comentarios', getAllComentarios);
router.post('/comentario/', createComentario);
router.put('/comentario/', updateComentario); 
router.delete('/comentario/', deleteComentario);
router.get('/comentario/', getComentarioById); 

export default router