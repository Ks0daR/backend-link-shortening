import { Router } from "express";
import { authController } from "../auth/auth.controller";
import { linksController } from "./links.controller";

const router = Router();

router.get("/", authController.isAutorizate, linksController.getAllLinks);

router.get("/:id", authController.isAutorizate, linksController.getLinkById);

router.post("/", authController.isAutorizate, linksController.createNewLink);

export const linksRouter = router;
