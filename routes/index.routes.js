import { Router } from "express";
import { ping } from "../controllers/index.controllers.js";


const router = Router();

router.get("/",(req,res)=>{
    res.json({
        author:"Edgar Tuyarot",
        description:"CRM Empleados",
        version:"1.0"
    })
} );

export default router;
