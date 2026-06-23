import express from "express";

import {
  generateRelease,
} from "../controllers/release.controller.js";

const router = express.Router();

router.post(
  "/:repoId",
  generateRelease
);

export default router;