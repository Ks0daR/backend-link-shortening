import { Router } from "express";
import { authModel } from "../auth/auth.model";
import { authController } from "../auth/auth.controller";
import { linksController } from "./links.controller";

const router = Router();

router.get("/", authController.isAutorizate, linksController.getAllLinks);

router.get("/:id", authController.isAutorizate);

router.post("/", authController.isAutorizate, linksController.createNewLink);

export const linksRouter = router;
