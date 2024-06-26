import { Router } from "express";
import { getUsers,postUsers } from "../controllers/users.controllers.js";
const router =  Router()


router.get("/all", getUsers);
router.post("/crear",postUsers);

export default router