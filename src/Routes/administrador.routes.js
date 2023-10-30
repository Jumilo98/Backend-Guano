import {Router} from 'express'
import { getAllAdministradores, getAdministradorById , createAdministrador , updateAdministrador , deleteAdministrador } from '../Controllers/administrador.controller.js'

const router =  Router ();


//Rutas de conexion al controlador administrador
router.get('/administradores', getAllAdministradores)
router.post('/administrador', createAdministrador)
router.put('/administrador/:id', updateAdministrador)
router.delete('/administrador/:id', deleteAdministrador)
router.get('/administrador/:id', getAdministradorById)

export default router