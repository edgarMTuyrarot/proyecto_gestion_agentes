import { Router } from "express";



const router = Router();

router.get("/",(req,res)=>{
    res.render('index',{name:"GI"})

} );

export default router;
