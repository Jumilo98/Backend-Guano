import {Router} from 'express'
import { getAllDestinos, getDestinoById , createDestino , updateDestino , deleteDestino} from '../controllers/destino.controller.js'

const router =  Router ();


//Rutas de conexion al controlador Desstino
router.get('/destinos', getAllDestinos)
router.post('/destino', createDestino)
router.put('/destino/:id', updateDestino)
router.delete('/destino/:id', deleteDestino)
router.get('/destino/:id', getDestinoById)

export default router