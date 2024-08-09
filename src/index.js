import app from "./app.js";
import { PORT } from "./config.js";

/**Se importa todos los modelos para poder usarlos en todas las futuras llamadas */
import "./models/Supervisores.js";
import "./models/Agentes.js";
import "./models/Users.js"
import "./models/Roles.js"


/**Se llama a sequelize para empezar a utilizar la conexion a la BBDD */
import sequelize from "./db/connection.js";

/**
 * Se establece una funcion main, donde iniciar el servidor previo a la conexion a la BBDD
 */
async function main() {
  try {
    /**Se utiliza .sync para establecer la conexion */
    await sequelize.sync({force:false})
    //Levantando server
    app.listen(PORT);
    console.log('server on')
  } catch (error) {
    console.log(error)
  }
}

main()