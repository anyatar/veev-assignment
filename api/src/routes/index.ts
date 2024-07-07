import express from "express";
import geometryRoutes from "./geometry.routes";
import authRoutes from "./auth.routes";
import { welcome } from "../controllers/home.controller";

const router = express.Router();

router.get("/", welcome);
router.use('/geometry', geometryRoutes);
router.use("/auth", authRoutes);

export default router;