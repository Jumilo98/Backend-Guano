import { Router } from 'express'
import {getAllArticulos, getArticuloById, createArticulo, updateArticulo, deleteArticulo} from '../Controllers/articulo.controller.js'


const router = Router();

//rutas de conexion al controlador articulo

router.get('/articulos', getAllArticulos);
router.post('/articulo', createArticulo);
router.put('/articulo/:id_articulo', updateArticulo);
router.delete('/articulo/:id_articulo', deleteArticulo);
router.get('/articulo/:id_articulo', getArticuloById);

export default router