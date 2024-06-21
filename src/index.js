import app from "./app.js";
import { PORT } from "./config.js";
import "./models/Supervisores.js";
import "./models/Agentes..js";
import sequelize from "./db/connection.js";

async function main() {
  try {
    await sequelize.sync()
    //Levantando server
    app.listen(PORT);
  } catch (error) {
    console.log(error)
  }
}
