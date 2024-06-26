import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";
import { Roles } from "../models/Roles.js";

export const Users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  mail: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

// Un usuario puede tener muchos roles
Roles.hasMany(Users, {
  foreignKey: "id",
});

//Un rol pertenece a un usuario
Users.belongsTo(Roles, {
  foreignKey: "rol_id",
});


