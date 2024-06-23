import { Router } from "express";
import {
  getSups,
  postSup,
  getSup,
  updateSup,
  deleteSup  
  } from '../controllers/sups.controllers.js'
const router = Router();

//Rutas
router.get("/sups", getSups);
router.get("/sup/:id", getSup);
router.post("/sups", postSup);
router.put("/sup/:id", updateSup);
router.delete("/sup/:id", deleteSup);

export default router;
