import { Router } from "express";
import { getRols,postRol } from "../controllers/roles.controllers.js";
const router =  Router()


router.get("/all", getRols);
router.post("/crear",postRol);

export default router