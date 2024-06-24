import express from "express";
import morgan from 'morgan'
import agentesRoutes from "../routes/agentes.routes.js";
import supsRoutes from '../routes/sups.routes.js'
import indexRouter from "../routes/index.routes.js";
import jccsRoutes from "../routes/jccs.routes.js";
import devolucionesRoutes from "../routes/devoluciones.routes.js";
import fcrRoutes from "../routes/fcr.routes.js";
import cuartilesRoutes from '../routes/cuartiles.routes.js'
import perfilamientosRoutes from '../routes/perfilamientos.routes.js'
import clustersRoutes from '../routes/clusters.routes.js'
import {PORT} from './config.js'



const app = express();


app.use(morgan('dev'))
app.use(express.json());

//Usando rutas
app.use(indexRouter);
app.use(agentesRoutes);
app.use(supsRoutes);
app.use(jccsRoutes);
app.use(devolucionesRoutes);
app.use(fcrRoutes);
app.use(cuartilesRoutes);
app.use(clustersRoutes);
app.use(perfilamientosRoutes);



app.use((req, res, netx) => {
    res.status(404).json({
        message: "endpoint no encontrado",
  });
});

export default app