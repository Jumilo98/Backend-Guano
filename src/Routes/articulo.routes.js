import { Router } from 'express'
import {getAllArticulos, getArticuloById, createArticulo, updateArticulo, deleteArticulo} from '../Controllers/articulo.controller.js'


const router = Router();

//rutas de conexion al controlador articulo

router.get('/articulos', getAllArticulos);
router.post('/articulo', createArticulo);
router.put('/articulo/:cedula_empleado', updateArticulo);
router.delete('/articulo/:cedula_empleado', deleteArticulo);
router.get('/articulo/:cedula_empleado', getArticuloById);

export default router