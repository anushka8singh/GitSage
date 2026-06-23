import express from "express";

import {
  importPullRequests,
} from "../controllers/pullRequest.controller.js";

const router = express.Router();

router.get(
  "/:repoId/import-prs",
  importPullRequests
);

export default router;