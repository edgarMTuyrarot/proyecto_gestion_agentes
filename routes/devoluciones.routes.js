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
router.get("/devoluciones", getDevoluciones);
router.get("/devolucion/:id", getDevolucion);
router.post("/devoluciones", postDevolucion);
router.patch("/devolucion/:id", updateDevolucion);
router.delete("/devolucion/:id", deleteDevolucion); 

export default router;
