import { Router } from "express";
import { getUsers,postUsers } from "../controllers/users.controllers.js";
import { userCreateValidate } from "../validators/user.js";
const router =  Router()


router.get("/all", getUsers);
router.post("/crear",userCreateValidate,postUsers);

export default router