import { DataTypes } from "sequelize"; //herramientas  de sequelize
import SequelizeInstance from "../config/database.js"; //trae los datos de database.js

export const Character = Sequelize.define(
    "character",
    {
            id:{
                type: DataTypes.INTEGER,
                primaryKey:true,
                allowNull: false,
                autoIncrement: true,
        },
            name:{
                type: DataTypes.STRING,
                allowNull: false
        },
            ki:{
                type: DataTypes.INTEGER,
                allowNull:false,
        },
            race:{
                type: DataTypes.STRING,
                allowNull:false,
        },
            gender:{
                type: DataTypes.STRING,
                allowNull: false,
        },
    }
)