import { Router } from "express";
import AthenticationController from "../controllers/athentication.controller";

const router = Router();
const athenticationController = new AthenticationController()

router.post("/register", athenticationController.register);
router.post("/login", athenticationController.login);

export default router;