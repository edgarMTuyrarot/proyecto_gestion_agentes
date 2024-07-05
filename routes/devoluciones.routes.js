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
router.get("/todo", getDevoluciones);
router.get("/buscar/:id", getDevolucion);
router.post("/crear/", postDevolucion);
router.patch("/actualizar/:id", updateDevolucion);
router.delete("/borrar/:id", deleteDevolucion); 

export default router;
