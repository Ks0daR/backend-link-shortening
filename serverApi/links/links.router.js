import { Router } from "express";
import { authModel } from "../auth/auth.model";
import { authController } from "../auth/auth.controller";
import { linksController } from "./links.controller";

const router = Router();

router.get("/",  linksController.getAllLinks);  
// вернуть authController.isAutorizate,
router.get("/:id",  linksController.getLinkById);

router.post("/",  linksController.createNewLink);

export const linksRouter = router;
