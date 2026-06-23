import express from "express";

import {
  analyzeRepositoryPRs,
} from "../controllers/prAnalysis.controller.js";

const router = express.Router();

router.post(
  "/:repoId",
  analyzeRepositoryPRs
);

export default router;