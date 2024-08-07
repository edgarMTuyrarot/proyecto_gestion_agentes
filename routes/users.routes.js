import { Router } from "express";
import {
  getUsers,
  postUsers,
  loginUser,
  userProfile,
} from "../controllers/users.controllers.js";
import { userCreateValidate, userLoginValidate } from "../validators/user.js";
import { verifyToken, verifyAdmin } from "../middleware/jwt.middleware.js";
const router = Router();

router.get("/all", verifyAdmin, getUsers);
router.post("/crear", userCreateValidate, postUsers);
router.post("/login", loginUser);
router.get("/profile", verifyToken, userProfile);

export default router;
