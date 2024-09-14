import { Router } from "express";

import {
  createUser,
  loginUser,
  logOutUser,
} from "../controllers/user.controller.js";
import verifyRequest from "../middleware/verifyRequest.js";

const router = Router();

router.route("/create-user").post(verifyRequest, createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(verifyRequest, logOutUser);

export default router;
