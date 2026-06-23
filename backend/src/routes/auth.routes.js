import express from "express";
import passport from "../config/passport.js";

const router = express.Router();

router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user:email"],
  })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.json({
      success: true,
      user: req.user,
    });
  }
);

export default router;