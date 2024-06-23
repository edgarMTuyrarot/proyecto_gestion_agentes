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
  foreignKey: "cluster_id",
});

Clusters.belongsTo(Perfilamientos,{
  foreignKey: "id",
});

Cuartiles.hasMany(Perfilamientos, {
  foreignKey: "cuartil_id",
});

Cuartiles.belongsTo(Perfilamientos, {
  foreignKey: "id",
});
