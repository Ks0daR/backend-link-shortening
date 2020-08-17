import { Router } from "express";
import { redirectController } from "./redirect.controller";

const router = Router();

router.get("/:code", redirectController.redirectToShortLink);

export const redirectRouter = router;
