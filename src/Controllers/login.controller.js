import { Usuario } from "../models/usuario.js";
import { sendEmail } from "../services/email.js";


export const verificarUsuario = async (req, res) => {
    const {username, password} = req.body;

    try {

        const usuarioEncontrado = await Usuario.findOne({
            where: {
                nombre_usuario: username
            }
        });
    
        if (! usuarioEncontrado) 
            return res.status(404).json({message: "Usuario no registrado"});
        
        if (usuarioEncontrado.contraseña != password) {
            return res.status(403).json({message: "Contraseña incorrecta"});
        } else {
            res.json({error: null, data: 'Bienvenido'})
        }
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const recuperarContrasenia = async (req, res) => {
    const {username, email } = req.body;
    try {
        const usuarioEncontrado = await Usuario.findOne({
            where: {
                nombre_usuario: username
            }});

        const password = "Su contraseña es: " + usuarioEncontrado.contraseña;
        const asunto = "Servicio de recuperación de contraseña para: " + usuarioEncontrado.nombre_usuario; 
        const mensaje = await sendEmail( asunto , password, email );
        console.log(mensaje.messageId)
        return res.json({error: null, data: 'Mensaje enviado correctamente'})

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
};


