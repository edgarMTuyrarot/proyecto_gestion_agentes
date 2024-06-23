import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
import { Agentes } from "./Agentes.js";

export const Devoluciones = sequelize.define("devoluciones", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
  },
  llamada_id: {
    type: DataTypes.STRING,
  },
  plan_de_trabajo: {
    type: DataTypes.TEXT,
  },
  a_mejorar: {
    type: DataTypes.TEXT,
  },
});
