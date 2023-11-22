import { Usuario } from "../Models/usuario.js";
import { sendEmail } from "../services/email.js";


export const verificarUsuario = async (req, res) => {
    const {email, contrasenia} = req.body;

    try {

        const usuarioEncontrado = await Usuario.findOne({
            where: {
                email_usuario: email
            }
        });
    
        if (! usuarioEncontrado) 
            return res.status(404).json({message: "Usuario no registrado"});
        
        if (usuarioEncontrado.contrasenia != password) {
            return res.status(403).json({message: "Contraseña incorrecta"});
        } else {
            res.json({error: null, data: 'Bienvenido'})
        }
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const recuperarContrasenia = async (req, res) => {
    const {nombres_usuario, email } = req.body;
    try {
        const usuarioEncontrado = await Usuario.findOne({
            where: {
                email_usuario: email
            }});

        const contrasenia = "Su contraseña es: " + usuarioEncontrado.contrasenia;
        const asunto = "Servicio de recuperación de contraseña para: " + usuarioEncontrado.nombres_usuario; 
        const mensaje = await sendEmail( asunto , contrasenia, email );
        console.log(mensaje.messageId)
        return res.json({error: null, data: 'Mensaje enviado correctamente'})

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
};


