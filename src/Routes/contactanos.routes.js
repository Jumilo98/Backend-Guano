import {Router} from 'express'
import { getAllContactanos, getContactoById , createContacto , updateContacto , deleteContacto } from '../controllers/contactanos.controller.js'

const router =  Router ();


//Rutas de conexion al controlador Contactanos
router.get('/contactanos', getAllContactanos)
router.post('/contacto', createContacto)
router.put('/contacto/:id', updateContacto)
router.delete('/contacto/:id', deleteContacto)
router.get('/contacto/:id', getContactoById)

export default router