import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import usuarioRoutes from './Routes/usuario.routes.js'
import imagenRoutes from './Routes/imagen.routes.js'
import productoRoutes from './Routes/producto.routes.js'
import articuloRoutes from './Routes/articulo.routes.js'
import loginRoutes from './Routes/login.routes.js'

import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'dg2squ3zi', 
    api_key: '227239579585877', 
    api_secret: 'Gh3jAkVmLfsYQSTg_1X8o9Nn8u8'
  });

//Instancias de express para inciar el servidor
const app = express()

app.use(express.json({ limit: '50mb' })); // Para datos JSON
app.use(express.urlencoded({ limit: '50mb', extended: true })); // Para datos de formulario


app.use(cors())

//dev
app.use(morgan('dev'));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Rutas de acceso al usuario
app.use(usuarioRoutes);

//Rutas de acceso al imagen 
app.use(imagenRoutes);

//Rutas de acceso producto
app.use(productoRoutes)

//Rutas de acceso al articulo 
app.use(articuloRoutes)

app.use(loginRoutes)

export default app;