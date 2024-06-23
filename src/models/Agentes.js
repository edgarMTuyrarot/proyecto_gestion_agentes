import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
import { Deslogueos } from "./Deslogueos.js";
import { Devoluciones } from "./Devoluciones.js";
import { Perfilamientos } from "./Perfilamientos.js";
import { Ausentismos } from "./Ausentismos.js";

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
// Un agente puede tener muchos deslogueos
Agentes.hasMany(Deslogueos, {
  foreignKey: "agente_id",
});

// Un deslogueo pertenece a un agente
Deslogueos.belongsTo(Agentes, {
  foreignKey: "agente_id",
});
// Un agente puede tener muchos Ausentismos
Agentes.hasMany(Ausentismos, {
  foreignKey: "agente_id",
});

// Un Ausentismo pertenece a un agente
Ausentismos.belongsTo(Agentes, {
  foreignKey: "agente_id",
});