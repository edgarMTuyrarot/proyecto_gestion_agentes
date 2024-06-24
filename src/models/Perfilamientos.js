import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
import { Clusters } from "./Cluster.js";
import { Cuartiles } from "./Cuartiles.js";

export const Perfilamientos = sequelize.define("perfilamientos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  mes: {
    type: DataTypes.STRING,
  },
  cuartil_id:{
    type: DataTypes.INTEGER
  },
  cluster_id:{
    type:DataTypes.INTEGER
  }
});

Clusters.hasMany(Perfilamientos, {
  foreignKey: "id",
});

Perfilamientos.belongsTo(Clusters,{
  foreignKey: "cluster_id",
});

Cuartiles.hasMany(Perfilamientos, {
  foreignKey: "id",
});

Perfilamientos.belongsTo(Cuartiles, {
  foreignKey: "cuartil_id",
});
