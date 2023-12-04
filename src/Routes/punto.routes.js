import { Router } from 'express'
import {getAllPuntos, getAll , getPuntoById, getPuntoByName, createPunto, updatePunto, deletePunto} from '../Controllers/punto.controller.js'

const router = Router();

//rutas de conexion al controlador articulo
router.get('/all/:pagina', getAll);
router.get('/puntos/:pagina', getAllPuntos);
router.get('/punto/:id_punto', getPuntoById);//id del punto
router.get('/punto/nombre/:nombres_punto', getPuntoByName);//todos los productos por nombre
router.post('/punto', createPunto);
router.put('/punto/:id_punto', updatePunto);//id del punto
router.delete('/punto/:id_punto', deletePunto);//id del punto

export default router