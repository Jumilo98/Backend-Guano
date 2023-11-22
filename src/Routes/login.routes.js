import {verificarUsuario, recuperarContrasenia} from '../Controllers/login.controller.js'
import {Router} from "express";

const router = Router();

router.post("/login", verificarUsuario);
router.post("/login/forgotPassword", recuperarContrasenia);

export default router;
