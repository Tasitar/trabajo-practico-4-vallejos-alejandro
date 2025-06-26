import Sequelize  from "sequelize";
import dotenv from 'dotenv';

dotenv.config(); //lee y carga las variables del .env

//con esto se logra la conecion de la BD, aca va lo del .env
const conecion_bd = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);



export default conecion_bd;
