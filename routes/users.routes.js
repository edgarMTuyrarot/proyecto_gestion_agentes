import { Router } from "express";
import { getUsers,postUsers,loginUser,userProfile } from "../controllers/users.controllers.js";
import { userCreateValidate,userLoginValidate } from "../validators/user.js";
import { verifyToken } from "../middleware/jwt.middleware.js";
const router =  Router()


router.get("/all", getUsers);
router.post("/crear",userCreateValidate,postUsers);
router.post("/login",userLoginValidate,loginUser)
router.get("/profile",verifyToken,userProfile)


export default router