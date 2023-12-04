import {Router} from 'express'
import { getAllUsuarios, getUsuarioById , createUsuario , updateUsuario , deleteUsuario} from '../Controllers/usuario.controller.js'

const router =  Router ();

//Rutas de conexion al controlador usuario
router.get('/usuarios/:pagina', getAllUsuarios);
router.post('/usuario', createUsuario);
router.put('/usuario/:id_usuario', updateUsuario);//id del usuario
router.delete('/usuario/:id_usuario', deleteUsuario);//id del usuario
router.get('/usuario/:id_usuario', getUsuarioById);//id del usuario

export default router