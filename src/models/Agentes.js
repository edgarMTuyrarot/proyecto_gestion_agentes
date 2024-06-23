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
  telefono:{
    type:DataTypes.STRING
  },
  deleted: {
    type: DataTypes.INTEGER,
  },
 
});

// Un agente puede tener muchas devoluciones
Agentes.hasMany(Devoluciones, {
  foreignKey: "agente_id",
});

// Una devolución pertenece a un agente
Devoluciones.belongsTo(Agentes, {
  foreignKey: "agente_id",
});
// Un agente puede tener muchos perfilamientos
Agentes.hasMany(Perfilamientos, {
  foreignKey: "agente_id",
});
//Un perfilamiento pertenece a un agente.
Perfilamientos.belongsTo(Agentes, {
  foreignKey: "agente_id",
});
