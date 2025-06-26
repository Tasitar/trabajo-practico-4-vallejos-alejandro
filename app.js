import express from 'express';
import dotenv from 'dotenv';
import characterRoutes from ''
import { Sequelize } from 'sequelize';

// con esto se carga las variables de entorno
dotenv.config();

const app = express();

// este es el middware
app.use(express.json());

app.use('/api/characters', characterRoutes);

try{
    await Sequelize.authenticate(); //esto sirve para intentar conectarse a la BD
    console.log('se conecto a la base de datos ;)')  //mensaje cuando se conecta
} catch (error) {
    console.error('error al conectarse a la base de datos >:v')// mensaje cuando no
}


const PORT = process.env.PORT || 3000; //la constante lee la variable port o pone por defecto el port 3000
app.listeners(PORT, ()=> {
    console.log ('el servidor esta corriendo en ${PORT}')
}) //esto escucha las peticiones que se hace en el puerto, de la Variable PORT o 3000
