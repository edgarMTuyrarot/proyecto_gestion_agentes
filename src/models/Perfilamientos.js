import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
import { Clusters } from "./Cluster.js";
import { Cuartiles } from "./Cuartiles.js";

export const Perfilamientos = sequelize("perfilamientos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  mes: {
    type: DataTypes.STRING,
  },
});

Perfilamientos.hasMany(Clusters, {
  foreignKey: "cluster_id",
});

Clusters.belongsTo(Perfilamientos, {
  foreignKey: "cluster_id",
});
Perfilamientos.hasMany(Cuartiles, {
  foreignKey: "cuartil_id",
});

Cuartiles.belongsTo(Perfilamientos, {
  foreignKey: "cuartil_id",
});
