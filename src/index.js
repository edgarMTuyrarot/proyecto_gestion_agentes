import app from "./app.js";
import { PORT } from "./config.js";

import "./models/Supervisores.js";
import "./models/Agentes.js";
import "./models/Deslogueos.js";
import "./models/Ausentismos.js";
import "./models/Cluster.js";
import "./models/Cuartiles.js";
import "./models/Devoluciones.js";
import "./models/Perfilamientos.js";

import sequelize from "./db/connection.js";

async function main() {
  try {
    await sequelize.sync({force:false})
    //Levantando server
    app.listen(PORT);
    console.log('server on')
  } catch (error) {
    console.log(error)
  }
}

main()