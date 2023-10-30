import { Router } from 'express'
import {getAllLacteos, getLacteoById, createLacteo, updateLacteo, deleteLacteo} from '../controllers/lacteo.controller.js'


const router = Router();

//rutas de conexion al controlador Lacteo

router.get('/lacteos', getAllLacteos);
router.post('/lacteo', createLacteo);
router.put('/lacteo/:cedula_empleado', updateLacteo);
router.delete('/lacteo/:cedula_empleado', deleteLacteo);
router.get('/lacteo/:cedula_empleado', getLacteoById);

export default router