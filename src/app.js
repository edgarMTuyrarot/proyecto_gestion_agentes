import express from "express";
import morgan from "morgan";
import agentesRoutes from "../routes/agentes.routes.js";
import supsRoutes from "../routes/sups.routes.js";
import indexRouter from "../routes/index.routes.js";
import devolucionesRoutes from "../routes/devoluciones.routes.js";
import cuartilesRoutes from "../routes/cuartiles.routes.js";
import perfilamientosRoutes from "../routes/perfilamientos.routes.js";
import clustersRoutes from "../routes/clusters.routes.js";
import usersRoutes from "../routes/users.routes.js";
import rolsRoutes from "../routes/roles.routes.js";

const app = express();

/**se utiliza morgan en version deb */
app.use(morgan("dev"));
/**Se le indica al app, que recibiremos JSONs desde las peticiones. */
app.use(express.json());

/**Se llama a app.use, para indicar que rutas vamos a usar previas importadas desde la carpeta routes */
app.use("/",indexRouter);
app.use("/rols",rolsRoutes)
app.use("/users",usersRoutes)
app.use("/agentes", agentesRoutes);
app.use("/sups", supsRoutes);
app.use("/devoluciones", devolucionesRoutes);
app.use("/cuartiles", cuartilesRoutes);
app.use("/clusters", clustersRoutes);
app.use("/perfilamientos", perfilamientosRoutes);

/**Se establece el envio de un JSON para los endpoints invalidos */
app.use((req, res, netx) => {
  res.status(404).json({
    message: "endpoint no encontrado",
  });
});

export default app;
