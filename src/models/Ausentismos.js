import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

export const Ausentismos = sequelize.define("ausentismos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  agente_id: {
    type: DataTypes.INTEGER,
  },
  fecha: {
    type: DataTypes.DATEONLY,
  },
  motivo: {
    type: DataTypes.STRING,
  },
});
