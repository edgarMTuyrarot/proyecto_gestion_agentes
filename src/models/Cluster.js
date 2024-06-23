import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
import { Perfilamientos } from "./Perfilamientos.js";

export const Clusters = sequelize.define("clusters", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cluster: {
    type: DataTypes.STRING,
  },
});

