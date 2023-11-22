import {Router} from 'express'
import { getAllUsuarios, getUsuarioById , createUsuario , updateUsuario , deleteUsuario} from '../Controllers/usuario.controller.js'

const router =  Router ();


//Rutas de conexion al controlador usuario
router.get('/administradores', getAllUsuarios)
router.post('/administrador', createUsuario)
router.put('/administrador/:id', updateUsuario)
router.delete('/administrador/:id', deleteUsuario)
router.get('/administrador/:id', getUsuarioById)

export default router