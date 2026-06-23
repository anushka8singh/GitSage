import express from "express";

import {
  importRepositories,
} from "../controllers/repository.controller.js";

const router = express.Router();

router.get("/import", importRepositories);

export default router;