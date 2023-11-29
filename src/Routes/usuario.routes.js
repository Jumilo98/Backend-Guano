import {Router} from 'express'
import { getAllUsuarios, getUsuarioById , createUsuario , updateUsuario , deleteUsuario} from '../Controllers/usuario.controller.js'

const router =  Router ();

//Rutas de conexion al controlador usuario
router.get('/usuarios', getAllUsuarios);
router.post('/usuario', createUsuario);
router.put('/usuario/:id', updateUsuario);//id del usuario
router.delete('/usuario/:id', deleteUsuario);//id del usuario
router.get('/usuario/:id', getUsuarioById);//id del usuario

export default router