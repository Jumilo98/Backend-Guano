import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary';

import usuarioRoutes from './Routes/usuario.routes.js'
import imagenRoutes from './Routes/imagen.routes.js'
import productoRoutes from './Routes/producto.routes.js'
import articuloRoutes from './Routes/articulo.routes.js'

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



//Rutas de acceso al usuario
app.use(usuarioRoutes);

//Rutas de acceso al imagen 
app.use(imagenRoutes);

//Rutas de acceso producto
app.use(productoRoutes)

//Rutas de acceso al articulo 
app.use(articuloRoutes)

export default app;