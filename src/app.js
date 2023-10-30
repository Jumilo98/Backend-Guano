import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary';

import administradorRoutes from './routes/administrador.routes.js'
import contactanosRoutes from './routes/contactanos.routes.js'
import destinoRoutes from './routes/destino.routes.js'
import lacteoRoutes from './routes/lacteo.routes.js'

cloudinary.config({ 
    cloud_name: 'dg2squ3zi', 
    api_key: '227239579585877', 
    api_secret: 'Gh3jAkVmLfsYQSTg_1X8o9Nn8u8'
  });

//Instancias de express para inciar el servidor
const app = express()
const upload = multer({dest: "uploads"});

app.use(cors())

//dev
app.use(morgan('dev'));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.post("/upload", upload.single("image"),async(req, res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        res.status(200).json(result);
    } catch (error) {
        console.log("error", error);
        res.status(400).send(error.message);
    }
});

//Rutas de acceso al area
app.use(administradorRoutes);

//Rutas de acceso al login 
app.use(contactanosRoutes);

//Rutas de acceso Rol
app.use(destinoRoutes)

//Rutas de acceso al usuario 
app.use(lacteoRoutes)

export default app;