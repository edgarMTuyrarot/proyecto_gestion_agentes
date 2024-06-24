import { Router } from "express";
//Importacion de los controladores
import {
  getCuartiles,
  postCuartil,  
  getCuartil,
  updateCuartil,
  deleteCuartil} from '../controllers/cuartiles.controllers.js'
const router = Router();

//Rutas
router.get("/cuartiles", getCuartiles);
router.get("/cuartil/:id", getCuartil);
router.post("/cuartiles", postCuartil);
router.put("/cuartil/:id", updateCuartil);
router.delete("/cuartil/:id", deleteCuartil); 

export default router;