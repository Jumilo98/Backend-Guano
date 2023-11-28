
import app from './app.js'
import {sequelize} from './Database/db.js'
import * as dotenv from 'dotenv'; 

dotenv.config();

const port = process.env.PORT;
// funcion de inicio del servidor 
async function main () {
    try {
        //inicia la conexion a la base de datos
        await sequelize.sync({force: false});
        console.log('Conexion se establecio correctamente.');
        //inicia el servidor 
        app.listen( port);
        console.log("El servidor esta escuchando al puerto: " + port );
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}

main();