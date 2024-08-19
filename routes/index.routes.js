import { Router } from "express";



const router = Router();

router.get("/",(req,res)=>{
    res.send("Server on")

} );

export default router;
