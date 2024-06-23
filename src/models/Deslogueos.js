import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

export const Deslogueos = sequelize.define('deslogueos',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha:{
        type: DataTypes.DATEONLY
    },
    inicio:{
        type: DataTypes.STRING
    },
    fin: {
        type: DataTypes.STRING
    },
    motivo:{
        type:DataTypes.STRING
    },
    agente_id:{
        type: DataTypes.INTEGER
    }
})