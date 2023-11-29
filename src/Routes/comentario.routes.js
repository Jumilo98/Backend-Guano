import {Router} from 'express';
import { getAllComentariosPr, getComentarioPrById , createComentarioPr , updateComentarioPr , deleteComentarioPr, 
         getAllComentariosP, getComentarioPById , createComentarioP , updateComentarioP , deleteComentarioP
} from '../Controllers/comentario.controller.js';

const router =  Router ();


//Rutas de conexion al controlador comentario Productos
router.get('/productos/comentarios', getAllComentariosPr);
router.post('/producto/comentario/:id', createComentarioPr);//id del producto
router.put('/producto/comentario/:id', updateComentarioPr); //id del comentario
router.delete('/producto/comentario/:id', deleteComentarioPr);//id del comentario
router.get('/producto/comentario/:id', getComentarioPrById); //id del comentario

//Rutas de conexion al controlador comentario Punto
router.get('/puntos/comentarios', getAllComentariosP);
router.post('/punto/comentario/', createComentarioP);//id del punto
router.put('/punto/comentario/:id', updateComentarioP); //id del comentario
router.delete('/punto/comentario:id/', deleteComentarioP);//id del comentario
router.get('/punto/comentario/:id', getComentarioPById); // id del cometnario

export default router