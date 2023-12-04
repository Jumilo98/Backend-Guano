import {Router} from 'express'
import { getAllEtiquetas, getEtiquetaById, getEtiquetaByName, createEtiqueta , updateEtiqueta , deleteEtiqueta } from '../Controllers/etiqueta.controller.js'

const router =  Router ();

//Rutas de conexion al controlador etiqueta
router.get('/etiquetas/:pagina', getAllEtiquetas);
router.get('/etiqueta/:id_etiqueta', getEtiquetaById); //id de la etiqueta
router.post('/etiqueta', createEtiqueta); 
router.put('/etiqueta/:id_etiqueta', updateEtiqueta); //id de la etiqueta
router.delete('/etiqueta/:id_etiqueta', deleteEtiqueta); //id de la etiqueta

router.get('/etiqueta/nombre/:nombre_etiqueta', getEtiquetaByName);//la etiqueta por nombre

export default router