import { Router } from "express";
//Importacion de los controladores
import {
  getDevoluciones,
  postDevolucion,  
  getDevolucion,
  updateDevolucion,
  deleteDevolucion} from '../controllers/devoluciones.controller.js'
const router = Router();

//Rutas
router.get("/all", getDevoluciones);
router.get("/buscar/:id", getDevolucion);
router.post("/create/", postDevolucion);
router.patch("/update/:id", updateDevolucion);
router.delete("/borrar/:id", deleteDevolucion); 

export default router;
