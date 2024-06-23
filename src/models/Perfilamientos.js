import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
import { Clusters } from "./Cluster.js";
import { Cuartiles } from "./Cuartiles.js";
import { Agentes } from "./Agentes.js";


export const Perfilamientos = sequelize('perfilamientos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    mes:{
        type: DataTypes.STRING
    },

})

Perfilamientos.hasMany(Agentes, {
    foreignKey: "agente_id",
    sourceKey: "id",
});

Agentes.belongsTo(Perfilamientos, {
    foreignKey: "agente_id",
    sourceKey: "id",
});

Perfilamientos.hasMany(Clusters, {
    foreignKey: "cluster_id",
    sourceKey: "id",
});

Clusters.belongsTo(Perfilamientos, {
    foreignKey: "cluster_id",
    sourceKey: "id",
});
Perfilamientos.hasMany(Cuartiles, {
    foreignKey: "cuartil_id",
    sourceKey: "id",
});

Cuartiles.belongsTo(Perfilamientos, {
    foreignKey: "cuartil_id",
    sourceKey: "id",
});