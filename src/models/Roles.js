import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

export const Roles = sequelize.define("roles",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    rol:{
        type:DataTypes.STRING
    }

}
)
