import { Router } from "express";
//Importacion de los controladores
import {
  getFcrAgente,
    
  
  
  } from '../controllers/fcrData.controllers.js'
const router = Router();

//Rutas
//router.get("/agentes", getAgentes);
router.get("/fcr/:id", getFcrAgente);
//router.post("/agentes", postAgente);
//router.patch("/agente/:id", updateAgente);
//router.delete("/agente/:id", deleteAgentes); 

export default router;