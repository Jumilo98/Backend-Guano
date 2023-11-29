import {Router} from 'express'
import { getAllEtiquetas, getEtiquetaById , createEtiqueta , updateEtiqueta , deleteEtiqueta } from '../Controllers/etiqueta.controller.js'

const router =  Router ();

//Rutas de conexion al controlador etiqueta
router.get('/etiquetas', getAllEtiquetas);
router.post('/etiqueta/:id_punto', createEtiqueta); //id del punto
router.put('/etiqueta/:id_etiqueta', updateEtiqueta); //id de la etiqueta
router.delete('/etiqueta/:id_etiqueta', deleteEtiqueta); //id de la etiqueta
router.get('/etiqueta/:id_etiqueta', getEtiquetaById); //id de la etiqueta

export default router