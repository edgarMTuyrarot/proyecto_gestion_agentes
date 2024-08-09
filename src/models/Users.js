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
  rol_id: {
    type: DataTypes.INTEGER,
  },
});

// Un usuario pertenece a un rol
Users.belongsTo(Roles, {
  foreignKey: 'rol_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

// Un rol puede tener muchos usuarios
Roles.hasMany(Users, {
  foreignKey: 'rol_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
