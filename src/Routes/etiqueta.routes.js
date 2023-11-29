import {Router} from 'express'
import { getAllEtiquetas, getEtiquetaById , createEtiqueta , updateEtiqueta , deleteEtiqueta } from '../Controllers/etiqueta.controller.js'

const router =  Router ();

//Rutas de conexion al controlador etiqueta
router.get('/etiquetas', getAllEtiquetas);
router.post('/etiqueta/:id', createEtiqueta); //id del punto
router.put('/etiqueta/:id', updateEtiqueta); //id de la etiqueta
router.delete('/etiqueta/:id', deleteEtiqueta); //id de la etiqueta
router.get('/etiqueta/:id', getEtiquetaById); //id de la etiqueta

export default router