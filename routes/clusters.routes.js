import { Router } from "express";
//Importacion de los controladores
import {
  getClusters,
  postCluster,  
  getCluster,
  updateCluster,
  deleteCluster} from '../controllers/clusters.controllers.js'
const router = Router();

//Rutas
router.get("/clusters", getClusters);
router.get("/clusters/:id", getCluster);
router.post("/clusters", postCluster);
router.put("/clusters/:id", updateCluster);
router.delete("/clusters/:id", deleteCluster); 

export default router;