import { Router } from "express";

import {
  createUser,
  loginUser,
  logOutUser,
} from "../controllers/user.controller.js";
import verifyRequest from "../middleware/verifyRequest.js";

const router = Router();

router.route("/create-user").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyRequest, logOutUser);

export default router;
