import { Router } from "express";
import { registerUser } from "../Controllers/user.controller.js";
import { loginUser } from "../Controllers/user.controller.js";

const router = Router();

router.route("/registerUser").post( registerUser );
router.route("/loginUser").post( loginUser );

export default router;