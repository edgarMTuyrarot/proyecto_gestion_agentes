import { Router } from "express";
import { getUsers,postUsers } from "../controllers/users.controllers.js";
import { validateCreate } from "../validators/user.js";
const router =  Router()


router.get("/all", getUsers);
router.post("/crear",validateCreate,postUsers);

export default router