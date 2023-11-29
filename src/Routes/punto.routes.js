import { Router } from 'express'
import {getAllPuntos, getPuntoById, createPunto, updatePunto, deletePunto} from '../Controllers/punto.controller.js'

const router = Router();

//rutas de conexion al controlador articulo
router.get('/puntos', getAllPuntos);
router.post('/punto', createPunto);
router.put('/punto/:id', updatePunto);//id del punto
router.delete('/punto/:id', deletePunto);//id del punto
router.get('/punto/:id', getPuntoById);//id del punto

export default router