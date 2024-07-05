import { Router } from "express";
//Importacion de los controladores
import {
  getAgentes,
  postAgente,
  getAgente,
  updateAgente,
  deleteAgentes,
} from "../controllers/agentes.controller.js";
import { agenteCreateValidate } from "../validators/agentes.js";
const router = Router();

//Rutas
router.get("/todos", getAgentes);
router.get("/buscar/:id", getAgente);
router.post("/crear",agenteCreateValidate, postAgente);
router.put("/actualizar/:id", updateAgente);
router.delete("/borrar/:id", deleteAgentes);

export default router;
