import { Router } from "express";
import {
  getJccs,
  postJcc,
  getJcc,
  updateJcc,
  deleteJcc  
  } from '../controllers/jccs.controllers.js'
const router = Router();

//Rutas
router.get("/jccs", getJccs);
router.get("/jcc/:id", postJcc);
router.post("/jcc", getJcc);
router.patch("/jcc/:id", updateJcc);
router.delete("/jcc/:id", deleteJcc);

export default router;
