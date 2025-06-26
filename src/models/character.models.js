import { DataTypes } from "sequelize"; //herramientas  de sequelize
import Sequelize from "../config/database"; //trae los datos de database.js

export const Character = Sequelize.define(
    "character",
    {
            id:{
                type: DataTypes.INTEGER,
                primarykey:true,
                allownull: false,
                autoIncrement: true,
        },
            name:{
                type: DataTypes.STRING,
                allownull: false
        },
            ki:{
                type: DataTypes.INTEGER,
                allownull:false,
        },
            race:{
                type: DataTypes.STRING,
                allownull:false,
        },
            gender:{
                type: DataTypes.STRING,
                allownull: false,
        },
    }
)