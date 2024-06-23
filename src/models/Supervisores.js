import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
import { Agentes } from "./Agentes.js";

export const Supervisores = sequelize.define("supervisores", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  mail: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  deleted: {
    type: DataTypes.INTEGER,
  },
});

//Un Supervisor puede tener muchas agentes
Supervisores.hasMany(Agentes, {
  foreignKey: "sups_id",
  
});
//un angente pertenece a un supervisor
Agentes.belongsTo(Supervisores, {
  foreignKey: "sups_id",
});
