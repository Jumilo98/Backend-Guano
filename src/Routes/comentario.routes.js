import {Router} from 'express'
import { getAllComentarios, getComentarioById , createComentario , updateComentario , deleteComentario } from '../Controllers/comentario.controller.js'

const router =  Router ();


//Rutas de conexion al controlador comentario
router.get('/comentarios', getAllComentarios)
router.post('/comentario/:id', createComentario); //id del producto/punto
router.put('/comentario/:id', updateComentario) //id del comentario
router.delete('/comentario/:id', deleteComentario) //id del comentario
router.get('/comentario/:id', getComentarioById) //id del comentario

export default router