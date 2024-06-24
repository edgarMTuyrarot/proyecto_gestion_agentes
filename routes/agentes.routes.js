import { Router } from "express";
//Importacion de los controladores
import {
  getAgentes,
  postAgente,  
  getAgente,
  updateAgente,
  deleteAgentes} from '../controllers/agentes.controller.js'
const router = Router();

//Rutas
router.get("/agentes", getAgentes);
router.get("/agente/:id", getAgente);
router.post("/agentes", postAgente);
router.put("/agente/:id", updateAgente);
router.delete("/agente/:id", deleteAgentes); 

export default router;
