import { Router } from "express";
import { getMyProfile } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/me", verifyToken, getMyProfile);

export default router;