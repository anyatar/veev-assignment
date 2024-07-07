import { Router } from "express";
import GeometryController from "../controllers/geometry.controller";
import { welcome } from "../controllers/home.controller";
import jwtAuthMiddleware from "../middlewares/auth.verify";

const router = Router();
const geometryController = new GeometryController();

router.get("/check-point-in-rectangle", /*jwtAuthMiddleware,*/ geometryController.checkPointInRectangle);
router.get("/check-point-in-circle", /*jwtAuthMiddleware,*/ geometryController.checkPointInCircle);

export default router;