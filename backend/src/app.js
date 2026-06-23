import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import healthRoutes from "./routes/health.routes.js";
import session from "express-session";
import passport from "./config/passport.js";
import authRoutes from "./routes/auth.routes.js";
import repositoryRoutes from "./routes/repository.routes.js";
import pullRequestRoutes from "./routes/pullRequest.routes.js";
import prAnalysisRoutes
from "./routes/prAnalysis.routes.js";


const app = express();

app.use(cors());

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/auth", authRoutes);
app.use(
  "/api/pr-analysis",
  prAnalysisRoutes
);
app.use("/api/health", healthRoutes);
app.use("/api/users", userRoutes);
app.use("/api/repos", repositoryRoutes);
app.use("/api/prs", pullRequestRoutes);
export default app;