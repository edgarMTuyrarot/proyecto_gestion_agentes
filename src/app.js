import express from "express";
import morgan from "morgan";
import agentesRoutes from "../routes/agentes.routes.js";
import supsRoutes from "../routes/sups.routes.js";
import indexRouter from "../routes/index.routes.js";
import devolucionesRoutes from "../routes/devoluciones.routes.js";
import fcrRoutes from "../routes/fcr.routes.js";
import cuartilesRoutes from "../routes/cuartiles.routes.js";
import perfilamientosRoutes from "../routes/perfilamientos.routes.js";
import clustersRoutes from "../routes/clusters.routes.js";
import usersRoutes from "../routes/users.routes.js";
import rolsRoutes from "../routes/roles.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

//Usando rutas
app.use(indexRouter);
app.use(fcrRoutes);
app.use("/rols",rolsRoutes)
app.use("/users",usersRoutes)
app.use("/agentes", agentesRoutes);
app.use("/sups", supsRoutes);
app.use("/devoluciones", devolucionesRoutes);
app.use("/cuartiles", cuartilesRoutes);
app.use("/clusters", clustersRoutes);
app.use("/perfilamientosRoutes", perfilamientosRoutes);


app.use((req, res, netx) => {
  res.status(404).json({
    message: "endpoint no encontrado",
  });
});

export default app;
