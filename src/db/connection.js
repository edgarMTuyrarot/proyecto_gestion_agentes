import {Sequelize} from 'sequelize'

/**
 * sequelize recibe como parametros el nombre de la BBDD, el usuario, y la contraseña, tambien
 * un objeto con el nombre del host y que dialecto de bbdd se utilizara
 */
const sequelize = new Sequelize('gi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,

})



export default sequelize;