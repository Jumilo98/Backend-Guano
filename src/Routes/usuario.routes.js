import {Router} from 'express'
import { getAllUsuarios, getUsuarioById , createUsuario , updateUsuario , deleteUsuario} from '../Controllers/usuario.controller.js'

const router =  Router ();


//Rutas de conexion al controlador usuario
router.get('/usuarios', getAllUsuarios)
router.post('/usuario', createUsuario)
router.put('/usuario/:id_usuario', updateUsuario)
router.delete('/usuario/:id_usuario', deleteUsuario)
router.get('/usuario/:id_usuario', getUsuarioById)

export default router