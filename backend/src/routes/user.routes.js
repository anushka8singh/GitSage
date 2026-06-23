import express from "express";

import {
  createUserController,
  getCurrentUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/me", getCurrentUser);

router.post("/", createUserController);

export default router;