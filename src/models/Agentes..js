import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

export const Agentes = sequelize.define("agentes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  usuario_teco: {
    type: DataTypes.STRING,
  },
  legajo: {
    type: DataTypes.STRING,
  },
  score: {
    type: DataTypes.STRING,
  },
  dni: {
    type: DataTypes.STRING,
  },
  mail: {
    type: DataTypes.STRING,
  },
  deleted: {
    type: DataTypes.INTEGER,
  },
 
});


