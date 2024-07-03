import { Router } from "express";
import {
  getSups,
  postSup,
  getSup,
  updateSup,
  deleteSup,
} from "../controllers/sups.controllers.js";
import { createSupsValidate } from "../validators/sups.js";
const router = Router();

//Rutas
router.get("/sups", getSups);
router.get("/sup/:id", getSup);
router.post("/crear", createSupsValidate, postSup);
router.put("/sup/:id", updateSup);
router.delete("/sup/:id", deleteSup);

export default router;
