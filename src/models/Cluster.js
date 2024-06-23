import {DataTypes} from 'sequelize';
import sequelize from '../db/connection.js';



export const Cluster = sequelize.definne('clusters',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cluster:{
        type: DataTypes.STRING
    }
})