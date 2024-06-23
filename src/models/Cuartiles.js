import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

export const Cuartil = sequelize.define("cuartiles", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cuartil:{
        type: DataTypes.STRING
    }
});
